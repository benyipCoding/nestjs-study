import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
// import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/decorator/public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('@@@@@@@@@@', context.getHandler());
    // const handler = context.getHandler();
    // console.log('############', handler());

    // const req = context.switchToHttp().getRequest<Request>();
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());
    console.log('########', isPublic);

    // const token = req.header('Authorization');
    // // return token === process.env.API_KEY;
    return true;
  }
}
