import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlDemoService } from './graph-ql_demo.service';

describe('GraphQlDemoService', () => {
  let service: GraphQlDemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlDemoService],
    }).compile();

    service = module.get<GraphQlDemoService>(GraphQlDemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
