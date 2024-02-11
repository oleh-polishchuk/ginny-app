import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from '../../app.service';
import { TodoistController } from './todoist.controller';
import { TodoistService } from '../../integrations/todoist/todoist.service';
import { TodoistApiService } from '../../integrations/todoist/todoist-api.service';
import { OpenFoodFactsService } from '../../open-food-facts/open-food-facts.service';
import { OpenFoodFactsApiService } from '../../open-food-facts/open-food-facts-api.service';

describe('TodoistController', () => {
  let controller: TodoistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TodoistController],
      providers: [
        AppService,
        TodoistService,
        TodoistApiService,
        OpenFoodFactsService,
        OpenFoodFactsApiService,
      ],
    }).compile();

    controller = module.get<TodoistController>(TodoistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
