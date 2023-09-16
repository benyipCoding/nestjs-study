import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GraphQlDemo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
