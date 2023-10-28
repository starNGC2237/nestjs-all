import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';

interface Options {
  path: string;
}

@Global()
@Module({})
export class ConfigModule {
  static forRoot(options: Options): DynamicModule {
    return {
      module: ConfigModule,
      controllers: [ConfigController],
      providers: [
        ConfigService,
        { provide: 'Config', useValue: 'Config' + options.path },
      ],
      exports: [
        ConfigService,
        { provide: 'Config', useValue: 'Config' + options.path },
      ],
    };
  }
}
