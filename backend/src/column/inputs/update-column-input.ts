import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateColumnInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: false })
  name: string;
}
