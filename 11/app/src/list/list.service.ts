import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class ListService {
  constructor(private readonly configService: ConfigService) {}

  create(createListDto: CreateListDto) {
    console.log(createListDto);
    return 'This action adds a new list';
  }

  findAll() {
    return this.configService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    console.log(updateListDto);
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
