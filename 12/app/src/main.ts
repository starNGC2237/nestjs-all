import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

const whiteList = ['/list'];

const middlewareAll = (req, res, next) => {
  console.log(req.originalUrl);
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send({ code: 0, msg: '没有权限' });
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(middlewareAll);
  await app.listen(3000);
}
bootstrap();
