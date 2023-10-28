import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('ABC') private readonly appService: AppService,
    @Inject('Test') private readonly shop: string[],
    @Inject('Test2') private readonly shop2: string[],
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('shop')
  getShop(): string[] {
    return this.shop;
  }
  @Get('shop_noJD')
  getNoJDShop(): string[] {
    return this.shop2;
  }
}
