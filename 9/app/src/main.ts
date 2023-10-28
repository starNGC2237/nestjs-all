import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  console.log(session);
  app.use(
    session({
      // 加盐
      secret: 'starMars',
      // 每次请求都会重新设置session cookie
      rolling: true,
      // 生成客户端的cookie的名字
      name: 'Authentication',
    }),
  );
  await app.listen(3000);
}
bootstrap();
