import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import { winstonLoggerInstance } from './helpers';

@Module({
  imports: [WinstonModule.forRoot(winstonLoggerInstance)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
