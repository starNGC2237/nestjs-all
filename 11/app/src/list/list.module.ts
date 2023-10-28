import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { ConfigModule } from 'src/config/config.module';

@Module({
  controllers: [ListController],
  providers: [ListService],
  imports: [ConfigModule],
})
export class ListModule {}
