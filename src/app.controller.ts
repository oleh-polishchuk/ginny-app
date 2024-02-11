import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('/api')
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/health')
  getHealthCheck() {
    const date = new Date();
    return {
      status: 'OK',
      'process.env': {
        NODE_ENV: this.configService.get('NODE_ENV'),
        PORT: this.configService.get('PORT'),
        TODOIST_CLIENT_ID:
          this.configService.get('TODOIST_CLIENT_ID') + this.getRandomHash(),
        TODOIST_CLIENT_SECRET:
          this.configService.get('TODOIST_CLIENT_SECRET') +
          this.getRandomHash(),
        TODOIST_STATE:
          this.configService.get('TODOIST_STATE') + this.getRandomHash(),
      },
      timestamp: +date,
      timestampUTC: date.toUTCString(),
    };
  }

  getRandomHash() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
