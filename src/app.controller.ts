import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/v1')
class AppController {

  constructor(
    @Inject("KEY1") private readonly appService: AppService) {
  }

  @Get('/hello/:id')
  getHello(@Param('id') id): string {
    console.log('id: ' + id);
    return this.appService.getHello();
  }
}

export {
  AppController,
};
