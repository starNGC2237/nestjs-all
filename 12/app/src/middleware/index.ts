import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('爱你');
    // 注掉会挂起

    // 可以用来判断权限
    // res.send('被拦截了');
    next();
  }
}
