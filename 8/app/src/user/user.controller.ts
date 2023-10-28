import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * request装饰器
   * 
   * @Get()
  findAll(@Request() req) {
    console.log(req.query);
    return {
      code: 200,
      message: req.query.name,
    };
  }
   * 
   */
  /**
   *
   * query装饰器
   */
  @Get()
  findAll(@Query() query) {
    console.log(query);
    return {
      code: 200,
      message: query.name,
    };
  }

  /**
   * post装饰器
   * @Post()
  create(@Request() req) {
    console.log(req.body.name);
    return {
      code: 200,
      name: req.body.name,
    };
  }
   */
  @Post()
  // 可以使用@Body('age') age直接接收
  create(@Body() body) {
    console.log(body.name);
    return {
      code: 200,
      name: body.name,
    };
  }

  // 动态参数
  @Get(':id')
  // 可以通过这个来控制返回的状态码
  @HttpCode(500)
  findOne(
    @Request() request,
    @Query() query,
    @Param() param,
    @Headers() headers,
  ) {
    console.log(request.params);
    console.log(param);
    console.log(headers);
    return {
      code: 200,
      message: query.name,
      id: request.params.id,
    };
  }
}
