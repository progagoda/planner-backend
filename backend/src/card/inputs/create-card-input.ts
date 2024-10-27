import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCardInput {
  @Field({ nullable: false })
  columnId: number;

  @Field({ nullable: false })
  name: string;
}
