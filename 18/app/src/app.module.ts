import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PModule } from './p/p.module';

@Module({
  imports: [PModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
