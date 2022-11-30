// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  country: String,
  dob: String,
  status: Boolean,
});

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  country: string;

  @Field()
  dob: string;

  @Field()
  status: boolean;
}
