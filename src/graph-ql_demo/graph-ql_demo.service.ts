import { Injectable } from '@nestjs/common';
import { CreateGraphQlDemoInput } from './dto/create-graph-ql_demo.input';
import { UpdateGraphQlDemoInput } from './dto/update-graph-ql_demo.input';

@Injectable()
export class GraphQlDemoService {
  create(createGraphQlDemoInput: CreateGraphQlDemoInput) {
    return 'This action adds a new graphQlDemo';
  }

  findAll() {
    return `This action returns all graphQlDemo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphQlDemo`;
  }

  update(id: number, updateGraphQlDemoInput: UpdateGraphQlDemoInput) {
    return `This action updates a #${id} graphQlDemo`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphQlDemo`;
  }
}
