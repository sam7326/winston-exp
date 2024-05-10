import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('check')
  getHello(@Query('isError') isError: string): string {
    return this.appService.getHello(isError);
  }
}
