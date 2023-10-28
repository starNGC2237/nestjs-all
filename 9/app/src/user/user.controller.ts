import { Controller, Get, Post, Req, Res, Session, Body } from '@nestjs/common';
import { UserService } from './user.service';
import * as svgCaptcha from 'svg-captcha';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: '#cc9966',
    });
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.status(200).send(captcha.data);
  }

  @Post('create')
  createUser(@Body() body, @Session() session) {
    console.log(
      body?.code?.toLocaleLowerCase(),
      session.code.toLocaleLowerCase(),
    );
    if (session.code.toLocaleLowerCase() !== body?.code?.toLocaleLowerCase()) {
      return {
        code: 400,
        msg: '验证码错误',
      };
    }
    return {
      code: 200,
    };
  }
}
