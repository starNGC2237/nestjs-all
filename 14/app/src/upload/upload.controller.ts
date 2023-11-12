import {
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { zip } from 'compressing';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return '？？？？？？';
  }

  @Get('export')
  downLoad(@Res() res: Response) {
    res.download(join(__dirname, '../images/1.jpg'));
  }

  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../images/1.jpg');
    const stream = new zip.Stream();
    await stream.addEntry(url);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=export.zip');
    stream.pipe(res);
  }
}
