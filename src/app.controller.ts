import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorator/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  async getHello(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.appService.getHello();
  }
}
