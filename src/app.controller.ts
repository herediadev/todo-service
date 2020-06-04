import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/v1')
class AppController {

  constructor(
    @Inject("KEY1") private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

export {
  AppController,
};
