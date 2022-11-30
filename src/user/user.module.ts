// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { BaseService } from '../base';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders, BaseService],
})
export class UserModule {}
