import { CreateGraphQlDemoInput } from './create-graph-ql_demo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphQlDemoInput extends PartialType(
  CreateGraphQlDemoInput,
) {
  @Field(() => Int)
  id: number;
}
