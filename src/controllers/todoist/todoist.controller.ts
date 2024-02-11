import * as process from 'process';
import { Response } from 'express';
import { AxiosResponse, isAxiosError } from 'axios';

import { ApiQuery } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Controller, Get, Query, Res } from '@nestjs/common';

import { AppService } from '../../app.service';
import { GetAccessTokenResponse } from '../../types';

let accessToken = '';

@Controller('api/todoist')
export class TodoistController {
  private readonly client_id: string;
  private readonly client_secret: string;

  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.client_id = process.env.TODOIST_CLIENT_ID;
    this.client_secret = process.env.TODOIST_CLIENT_SECRET;
  }

  @Get('/oauth')
  async getOAuth(
    @Query('code') code: string,
    @Query('state') state: string,
    @Res() response: Response,
  ) {
    try {
      // if (state !== process.env.TODOIST_STATE) {
      //   console.log('Error: todoist.com API returned invalid state');
      //   throw new Error('Invalid state');
      // }

      const res: AxiosResponse<any, GetAccessTokenResponse> =
        await this.httpService
          .post(
            `https://todoist.com/oauth/access_token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${code}`,
          )
          .toPromise();
      if (res.status !== 200) {
        console.log(
          'Error: todoist.com/oauth/access_token API returned non-200 status code',
        );
      }

      accessToken = res.data.access_token;

      const redirectURL =
        this.configService.get<string>('NODE_ENV') === 'production'
          ? 'https://ginny-app.com/?success=true'
          : '`http://localhost:3000?success=true`';
      response.status(302).redirect(redirectURL);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log('e', error.response?.data);
      } else {
        console.log('e', error);
      }
    }
  }

  @ApiQuery({
    name: 'barcode',
    type: 'string',
    required: true,
    example: '4305615851433',
  })
  @Get('/add-task')
  async addTask(@Query('barcode') barcode: string, @Res() response: Response) {
    try {
      await this.appService.addTask(accessToken, barcode as string);

      return response.json('success');
    } catch (error) {
      if (isAxiosError(error)) {
        console.log('e', error.response?.data);
      } else {
        console.log('e', error);
      }
    }
  }
}
