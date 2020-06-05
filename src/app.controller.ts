import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('/v1')
class AppController {

  constructor(
    @Inject('KEY1') private readonly appService: AppService) {
  }

  @Get('/hello/:id/params')
  getHello(@Param('id') id, @Query('name') name, @Req() request): string {
    console.log('id: ' + id);
    console.log('test: ' + name);
    console.log(request);
    return this.appService.getHello();
  }

  @Post('/hello')
  @HttpCode(HttpStatus.CREATED)
  postHello(@Body() payload: any): string {
    console.log(payload);
    return 'ok';
  }

  @Get('/names')
  getNames(@Res() response: Response): void {
    response.status(200);
    response.json([{ name: 'name1' }, { name: 'name2' }]);
  }
}

export {
  AppController,
};
