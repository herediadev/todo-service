import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: 'KEY1',
    useClass: AppService,
  }],
})
export class AppModule {
}
