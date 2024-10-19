import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateColumnInput {
  @Field({ nullable: false })
  boardId: string;

  @Field({ nullable: false })
  name: string;
}
