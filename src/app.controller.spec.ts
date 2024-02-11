import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TodoistService } from './integrations/todoist/todoist.service';
import { TodoistApiService } from './integrations/todoist/todoist-api.service';
import { OpenFoodFactsService } from './open-food-facts/open-food-facts.service';
import { OpenFoodFactsApiService } from './open-food-facts/open-food-facts-api.service';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      controllers: [AppController],
      providers: [
        AppService,
        TodoistService,
        TodoistService,
        TodoistApiService,
        OpenFoodFactsService,
        OpenFoodFactsApiService,
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "OK"', () => {
      expect(appController.getHealthCheck()).toMatchObject({
        status: 'OK',
      });
    });
  });
});
