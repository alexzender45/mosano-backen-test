// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { BaseModule } from './base';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    BaseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class AppModule {}
