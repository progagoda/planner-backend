import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  scopeId: string;

  @Field({ nullable: true })
  background: string;
}
