import { Injectable } from '@nestjs/common';
import { AdminRepository } from '@gitroom/nestjs-libraries/database/prisma/admin/admin.repository';

@Injectable()
export class AdminService {
  constructor(private _adminRepository: AdminRepository) {}

  getStats() {
    return this._adminRepository.getStats();
  }

  getOrganizations(search: string, page: number) {
    return this._adminRepository.getOrganizations(search, page);
  }
}
