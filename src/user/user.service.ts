// src/user/user.service.ts
import { Model, FilterQuery, CreateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.schema';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async createToken({_id, name}: any){
    return jwt.sign({_id, name}, 'secret')
  }
  async create(input: any) {
    const user = await this.userModel.create(input);
    const token = await this.createToken(user)
    return {user, token}
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  // async update(id: string, input: CreateQuery<User>): Promise<User> {
  //   return this.userModel.findByIdAndUpdate(
  //     id,
  //     { $set: input},
  //     { new: true },
  //   ).lean();
  // }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).lean();
  }
  
}
