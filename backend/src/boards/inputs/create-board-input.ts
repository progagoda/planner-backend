import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  scopeId: string;

  @Field({ nullable: true })
  background: string;
}
