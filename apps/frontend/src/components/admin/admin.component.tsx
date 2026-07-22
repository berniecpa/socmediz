'use client';

import { FC, FormEvent, useCallback, useState } from 'react';
import useSWR from 'swr';
import clsx from 'clsx';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { useUser } from '@gitroom/frontend/components/layout/user.context';
import {
  AddAnnouncement,
  ImportDebugPost,
} from '@gitroom/frontend/components/layout/impersonate';

interface AdminStats {
  users: number;
  organizations: number;
  paying: number;
  trialing: number;
  channels: number;
  posts: number;
}

interface AdminOrganization {
  id: string;
  name: string;
  createdAt: string;
  isTrailing: boolean;
  allowTrial: boolean;
  subscription: {
    subscriptionTier: string;
    isLifetime: boolean;
    period: string;
    createdAt: string;
  } | null;
  users: Array<{
    user: {
      id: string;
      email: string;
      name: string | null;
      isSuperAdmin: boolean;
      createdAt: string;
    };
  }>;
  _count: {
    Integration: number;
    post: number;
  };
}

interface AdminOrganizations {
  total: number;
  organizations: AdminOrganization[];
}

const useAdminStats = () => {
  const fetch = useFetch();
  return useSWR<AdminStats>('/admin/stats', async () => {
    return (await fetch('/admin/stats')).json();
  });
};

const useAdminOrganizations = (search: string, page: number) => {
  const fetch = useFetch();
  return useSWR<AdminOrganizations>(
    `/admin/organizations?search=${encodeURIComponent(search)}&page=${page}`,
    async () => {
      return (
        await fetch(
          `/admin/organizations?search=${encodeURIComponent(
            search
          )}&page=${page}`
        )
      ).json();
    },
    { keepPreviousData: true }
  );
};

const StatCard: FC<{ label: string; value?: number }> = ({ label, value }) => (
  <div className="flex flex-col gap-[4px] rounded-[12px] bg-newBgColorInner border border-newTableBorder p-[20px]">
    <div className="text-[13px] text-newTableText">{label}</div>
    <div className="text-[28px] font-[600]">
      {value === undefined ? '—' : value.toLocaleString()}
    </div>
  </div>
);

const TierBadge: FC<{ org: AdminOrganization }> = ({ org }) => {
  if (org.subscription?.isLifetime) {
    return (
      <span className="rounded-full bg-[#1E3A8A] px-[10px] py-[3px] text-[12px] font-[600] text-white">
        LIFETIME
      </span>
    );
  }
  if (org.subscription) {
    return (
      <span className="rounded-full bg-[#1E3A8A] px-[10px] py-[3px] text-[12px] font-[600] text-white">
        {org.subscription.subscriptionTier}
        {org.isTrailing ? ' · TRIAL' : ''}
      </span>
    );
  }
  return (
    <span className="rounded-full bg-newTableHeader border border-newTableBorder px-[10px] py-[3px] text-[12px] font-[600] text-newTableText">
      FREE
    </span>
  );
};

export const AdminComponent = () => {
  const user = useUser();
  const fetch = useFetch();
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { data: stats } = useAdminStats();
  const { data: orgs, isLoading } = useAdminOrganizations(query, page);

  const submitSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setPage(1);
      setQuery(search);
    },
    [search]
  );

  const impersonate = useCallback(
    (userId: string) => async () => {
      await fetch(`/user/impersonate`, {
        method: 'POST',
        body: JSON.stringify({
          id: userId,
        }),
      });
      window.location.href = '/launches';
    },
    [fetch]
  );

  if (user && !user.isSuperAdmin) {
    return (
      <div className="flex flex-1 items-center justify-center text-newTableText">
        You need super admin access to view this page.
      </div>
    );
  }

  const totalPages = Math.max(1, Math.ceil((orgs?.total || 0) / 25));

  return (
    <div className="flex flex-1 flex-col gap-[20px]">
      <div className="flex items-center gap-[12px]">
        <div className="flex-1 text-[24px] font-[600]">Admin Dashboard</div>
        <div className="flex items-center gap-[8px] text-[13px] [&>div]:py-[8px] [&>div]:px-[14px] [&>div]:rounded-[8px]">
          <ImportDebugPost />
          <AddAnnouncement />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-[12px] tablet:grid-cols-3 mobile:!grid-cols-2">
        <StatCard label="Users" value={stats?.users} />
        <StatCard label="Workspaces" value={stats?.organizations} />
        <StatCard label="Paying" value={stats?.paying} />
        <StatCard label="On trial" value={stats?.trialing} />
        <StatCard label="Connected channels" value={stats?.channels} />
        <StatCard label="Posts" value={stats?.posts} />
      </div>

      <div className="flex flex-col gap-[16px] rounded-[12px] bg-newBgColorInner border border-newTableBorder p-[20px]">
        <form onSubmit={submitSearch} className="flex gap-[8px]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by workspace name or email…"
            className="h-[42px] flex-1 rounded-[8px] border border-newTableBorder bg-newBgColor px-[14px] text-[14px] outline-none focus:border-[#1E3A8A]"
          />
          <button
            type="submit"
            className="h-[42px] rounded-[8px] bg-[#1E3A8A] px-[20px] text-[14px] font-[600] text-white transition-colors hover:bg-[#2563EB]"
          >
            Search
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full text-start text-[14px]">
            <thead>
              <tr className="border-b border-newTableBorder text-newTableText">
                <th className="px-[8px] py-[10px] text-start font-[500]">
                  Workspace
                </th>
                <th className="px-[8px] py-[10px] text-start font-[500]">
                  Owner
                </th>
                <th className="px-[8px] py-[10px] text-start font-[500]">
                  Plan
                </th>
                <th className="px-[8px] py-[10px] text-start font-[500]">
                  Channels
                </th>
                <th className="px-[8px] py-[10px] text-start font-[500]">
                  Posts
                </th>
                <th className="px-[8px] py-[10px] text-start font-[500]">
                  Created
                </th>
                <th className="px-[8px] py-[10px] text-start font-[500]" />
              </tr>
            </thead>
            <tbody>
              {(orgs?.organizations || []).map((org) => {
                const owner = org.users[0]?.user;
                return (
                  <tr
                    key={org.id}
                    className="border-b border-newTableBorder last:border-0 hover:bg-boxHover"
                  >
                    <td className="px-[8px] py-[12px] font-[500]">
                      {org.name || '—'}
                    </td>
                    <td className="px-[8px] py-[12px]">
                      <div className="flex flex-col">
                        <span>
                          {owner?.email || '—'}
                          {owner?.isSuperAdmin ? ' ⭐' : ''}
                        </span>
                        {owner?.name && (
                          <span className="text-[12px] text-newTableText">
                            {owner.name}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-[8px] py-[12px]">
                      <TierBadge org={org} />
                    </td>
                    <td className="px-[8px] py-[12px]">
                      {org._count.Integration}
                    </td>
                    <td className="px-[8px] py-[12px]">{org._count.post}</td>
                    <td className="px-[8px] py-[12px] text-newTableText">
                      {new Date(org.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-[8px] py-[12px] text-end">
                      {owner && owner.id !== user?.id && (
                        <button
                          onClick={impersonate(owner.id)}
                          className="rounded-[6px] border border-newTableBorder px-[12px] py-[6px] text-[13px] transition-colors hover:border-[#2563EB] hover:text-[#60A5FA]"
                        >
                          Impersonate
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {!isLoading && (orgs?.organizations || []).length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-[8px] py-[24px] text-center text-newTableText"
                  >
                    No workspaces found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between text-[13px] text-newTableText">
          <div>
            {orgs?.total || 0} workspace{(orgs?.total || 0) === 1 ? '' : 's'}
          </div>
          <div className="flex items-center gap-[8px]">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={clsx(
                'rounded-[6px] border border-newTableBorder px-[12px] py-[6px]',
                page <= 1
                  ? 'cursor-not-allowed opacity-40'
                  : 'hover:border-[#2563EB]'
              )}
            >
              Previous
            </button>
            <div>
              Page {page} of {totalPages}
            </div>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={clsx(
                'rounded-[6px] border border-newTableBorder px-[12px] py-[6px]',
                page >= totalPages
                  ? 'cursor-not-allowed opacity-40'
                  : 'hover:border-[#2563EB]'
              )}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
