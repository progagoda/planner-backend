import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCardInput {
  @Field({ nullable: false })
  columnId: string;

  @Field({ nullable: false })
  name: string;
}
