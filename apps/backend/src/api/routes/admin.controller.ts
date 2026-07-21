import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUserFromRequest } from '@gitroom/nestjs-libraries/user/user.from.request';
import { AdminService } from '@gitroom/nestjs-libraries/database/prisma/admin/admin.service';

@ApiTags('Admin')
@Controller('/admin')
export class AdminController {
  constructor(private _adminService: AdminService) {}

  @Get('/stats')
  async stats(@GetUserFromRequest() user: User) {
    if (!user.isSuperAdmin) {
      throw new HttpException('Unauthorized', 400);
    }

    return this._adminService.getStats();
  }

  @Get('/organizations')
  async organizations(
    @GetUserFromRequest() user: User,
    @Query('search') search: string,
    @Query('page') page: string
  ) {
    if (!user.isSuperAdmin) {
      throw new HttpException('Unauthorized', 400);
    }

    return this._adminService.getOrganizations(
      search || '',
      Math.max(1, +(page || 1) || 1)
    );
  }
}
