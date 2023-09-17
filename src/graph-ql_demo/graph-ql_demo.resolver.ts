import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphQlDemoService } from './graph-ql_demo.service';
import { GraphQlDemo } from './entities/graph-ql_demo.entity';
import { CreateGraphQlDemoInput } from './dto/create-graph-ql_demo.input';
import { UpdateGraphQlDemoInput } from './dto/update-graph-ql_demo.input';
import { Public } from 'src/decorator/public.decorator';

@Resolver(() => GraphQlDemo)
export class GraphQlDemoResolver {
  constructor(private readonly graphQlDemoService: GraphQlDemoService) {}

  @Mutation(() => GraphQlDemo)
  createGraphQlDemo(
    @Args('createGraphQlDemoInput')
    createGraphQlDemoInput: CreateGraphQlDemoInput,
  ) {
    return this.graphQlDemoService.create(createGraphQlDemoInput);
  }

  @Public()
  @Query(() => [GraphQlDemo], { name: 'graphQlDemo' })
  findAll() {
    return this.graphQlDemoService.findAll();
  }

  @Query(() => GraphQlDemo, { name: 'graphQlDemo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphQlDemoService.findOne(id);
  }

  @Mutation(() => GraphQlDemo)
  updateGraphQlDemo(
    @Args('updateGraphQlDemoInput')
    updateGraphQlDemoInput: UpdateGraphQlDemoInput,
  ) {
    return this.graphQlDemoService.update(
      updateGraphQlDemoInput.id,
      updateGraphQlDemoInput,
    );
  }

  @Mutation(() => GraphQlDemo)
  removeGraphQlDemo(@Args('id', { type: () => Int }) id: number) {
    return this.graphQlDemoService.remove(id);
  }
}
