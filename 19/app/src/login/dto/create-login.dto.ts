import { IsNotEmpty, IsString, Length, IsNumber } from 'class-validator';
export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 20, { message: '用户名长度不对' })
  name: string;
  @IsNumber()
  age: number;
}
