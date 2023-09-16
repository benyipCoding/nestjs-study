import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlDemoResolver } from './graph-ql_demo.resolver';
import { GraphQlDemoService } from './graph-ql_demo.service';

describe('GraphQlDemoResolver', () => {
  let resolver: GraphQlDemoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlDemoResolver, GraphQlDemoService],
    }).compile();

    resolver = module.get<GraphQlDemoResolver>(GraphQlDemoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
