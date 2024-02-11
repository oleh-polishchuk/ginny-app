import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { TodoistService } from './todoist.service';
import { TodoistApiService } from './todoist-api.service';

describe('TodoistService', () => {
  let service: TodoistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [TodoistService, TodoistApiService],
    }).compile();

    service = module.get<TodoistService>(TodoistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
