import { Module } from '@nestjs/common';
import { GraphQlDemoService } from './graph-ql_demo.service';
import { GraphQlDemoResolver } from './graph-ql_demo.resolver';

@Module({
  providers: [GraphQlDemoResolver, GraphQlDemoService],
})
export class GraphQlDemoModule {}
