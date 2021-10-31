import { Controller, Get, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('home/index')
  root() {
    return { message: 'Hello Luser!' };
  }
}