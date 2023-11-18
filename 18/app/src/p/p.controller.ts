import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PService } from './p.service';
import { CreatePDto } from './dto/create-p.dto';
import { UpdatePDto } from './dto/update-p.dto';

@Controller('p')
export class PController {
  constructor(private readonly pService: PService) {}

  @Post()
  create(@Body() createPDto: CreatePDto) {
    return this.pService.create(createPDto);
  }

  @Get()
  findAll() {
    return this.pService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    // ParseIntPipe
    // 这样就变成了number类型
    // ParseUUIDPipe
    // 使用
    // import * as uuid from 'uuid';
    // console.log(uuid.v4());
    // 管道转换
    // ValidationPipe
    // ParseIntPipe
    // ParseFloatPipe
    // ParseBoolPipe
    // ParseArrayPipe
    // ParseUUIDPipe
    // ParseEnumPipe
    // DefaultValuePipe
    /**
     * {
          "message": "Validation failed (uuid is expected)",
          "error": "Bad Request",
          "statusCode": 400
        }
     */
    console.log(typeof id);
    return this.pService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePDto: UpdatePDto) {
    return this.pService.update(+id, updatePDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pService.remove(+id);
  }
}
