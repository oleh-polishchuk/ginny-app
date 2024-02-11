import { join } from 'path';

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoistModule } from './integrations/todoist/todoist.module';
import { OpenFoodFactsModule } from './open-food-facts/open-food-facts.module';
import { TodoistController } from './controllers/todoist/todoist.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          rootPath:
            configService.get('NODE_ENV') === 'development'
              ? join(__dirname, '..', 'client')
              : join(__dirname, 'client'), // for AWS Elastic Beanstalk
          exclude: ['/api/(.*)'],
        },
      ],
    }),
    TodoistModule,
    OpenFoodFactsModule,
  ],
  controllers: [AppController, TodoistController],
  providers: [AppService],
})
export class AppModule {}
