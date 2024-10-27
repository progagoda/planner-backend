import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCardInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  columnId: number;
}
