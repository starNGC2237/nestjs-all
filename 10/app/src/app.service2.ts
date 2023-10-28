import { Injectable } from '@nestjs/common';

// 使用Injectable进行修饰，表示该类是一个服务
@Injectable()
export class AppService2 {
  getHello(): string {
    return 'Hello World!';
  }
}
