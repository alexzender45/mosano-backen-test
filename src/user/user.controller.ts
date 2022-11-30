import {
    Controller,
    Post,
    Body,
    HttpStatus,
    Inject,
    Get,
    Param,
    Delete,
    Query,
    Put,
  } from '@nestjs/common';
  import { BaseService } from '../base';
  import { UserService } from './user.service';
  // use guard
  @Controller('users')
  export class UserController {
    @Inject(UserService)
    private readonly userService: UserService;
    @Inject(BaseService)
    private readonly baseService: BaseService;
  
    @Post()
    public async create(@Body() data: any) {
      
      const newUser = await this.userService.create(data);
      return this.baseService.transformResponse(
        'User created successfully',
        newUser,
        HttpStatus.CREATED,
      );
    }
    @Get('')
    public async findAll() {
      const users = await this.userService.find();
  
      return this.baseService.transformResponse(
        'Users found successfully',
        users,
        HttpStatus.OK,
      );
    }
  
    // @Put(':id')
    // public async update(@Param('id') id: string, @Body() data: any) {
    //   const developer = await this.develService.update(id, data);
  
    //   return this.baseService.transformResponse(
    //     'Developer updated successfully',
    //     developer,
    //     HttpStatus.OK,
    //   );
    // }
  
    @Delete(':id')
    public async delete(@Param('id') id: string) {
      await this.userService.delete(id);
  
      return this.baseService.transformResponse(
        'User deleted successfully',
        HttpStatus.OK,
      );
    }

  }
  