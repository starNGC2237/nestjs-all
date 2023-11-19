import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // LoginPipe { name: '1111', age: 12 } { metatype: [class CreateLoginDto], type: 'body', data: undefined }
    // console.log('LoginPipe', value, metadata);
    const DTO = plainToInstance(metadata.metatype, value);
    const errors = await validate(DTO);
    console.log('errors', errors);
    if (errors.length) {
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    console.log('DTO', DTO);
    return value;
  }
}
