import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getTestUser(): string {
    return 'users!!!!!!!!!!!';
  }
}