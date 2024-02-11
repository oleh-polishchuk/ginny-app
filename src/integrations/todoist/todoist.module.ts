import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { TodoistService } from './todoist.service';
import { TodoistApiService } from './todoist-api.service';

@Module({
  imports: [HttpModule],
  providers: [TodoistService, TodoistApiService],
  exports: [TodoistService],
})
export class TodoistModule {}
