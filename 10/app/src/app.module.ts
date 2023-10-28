import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';

@Module({
  imports: [],
  controllers: [AppController], // 注入到providers中
  providers: [
    AppService2,
    {
      provide: 'ABC',
      useClass: AppService,
    },
    {
      provide: 'Test',
      useValue: ['TB', 'PDD', 'JD'],
    },
    {
      // 工厂模式
      provide: 'Test2', // 可以通过inject注入其他服务
      inject: [AppService2],
      async useFactory(AppService2) {
        console.log(AppService2.getHello());
        return await new Promise((r) =>
          setTimeout(() => r(AppService2.getHello()), 2000),
        );
      },
    },
  ],
})
export class AppModule {}
