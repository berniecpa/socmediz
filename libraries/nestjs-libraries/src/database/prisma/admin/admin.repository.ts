import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '@gitroom/nestjs-libraries/database/prisma/prisma.service';

@Injectable()
export class AdminRepository {
  constructor(
    private _user: PrismaRepository<'user'>,
    private _organization: PrismaRepository<'organization'>,
    private _subscription: PrismaRepository<'subscription'>,
    private _integration: PrismaRepository<'integration'>,
    private _post: PrismaRepository<'post'>
  ) {}

  async getStats() {
    const [users, organizations, paying, trialing, channels, posts] =
      await Promise.all([
        this._user.model.user.count(),
        this._organization.model.organization.count(),
        this._subscription.model.subscription.count({
          where: { deletedAt: null },
        }),
        this._organization.model.organization.count({
          where: { isTrailing: true, subscription: { deletedAt: null } },
        }),
        this._integration.model.integration.count({
          where: { deletedAt: null, disabled: false },
        }),
        this._post.model.post.count({
          where: { deletedAt: null },
        }),
      ]);

    return { users, organizations, paying, trialing, channels, posts };
  }

  async getOrganizations(search: string, page: number) {
    const where = {
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' as const } },
              {
                users: {
                  some: {
                    user: {
                      email: {
                        contains: search,
                        mode: 'insensitive' as const,
                      },
                    },
                  },
                },
              },
            ],
          }
        : {}),
    };

    const [total, organizations] = await Promise.all([
      this._organization.model.organization.count({ where }),
      this._organization.model.organization.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: 25,
        skip: Math.max(0, page - 1) * 25,
        select: {
          id: true,
          name: true,
          createdAt: true,
          isTrailing: true,
          allowTrial: true,
          subscription: {
            select: {
              subscriptionTier: true,
              isLifetime: true,
              period: true,
              createdAt: true,
              deletedAt: true,
            },
          },
          users: {
            where: { role: 'SUPERADMIN' },
            take: 1,
            select: {
              user: {
                select: {
                  id: true,
                  email: true,
                  name: true,
                  isSuperAdmin: true,
                  createdAt: true,
                },
              },
            },
          },
          _count: {
            select: {
              Integration: { where: { deletedAt: null } },
              post: { where: { deletedAt: null } },
            },
          },
        },
      }),
    ]);

    return {
      total,
      organizations: organizations.map((org) => ({
        ...org,
        subscription:
          org.subscription && !org.subscription.deletedAt
            ? org.subscription
            : null,
      })),
    };
  }
}
