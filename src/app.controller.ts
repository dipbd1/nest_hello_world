import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('music')
  @Redirect('https://www.youtube.com')
  watchMusic(@Query('name') name: string) {
    return { url: `https://www.youtube.com/results?search_query=${name}` };
  }
}
