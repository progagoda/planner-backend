import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateColumnInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  positionIndex: number;
}
