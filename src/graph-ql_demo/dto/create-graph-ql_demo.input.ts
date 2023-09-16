import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphQlDemoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
