// src/user/user.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
