import { Injectable } from '@nestjs/common';
import { TodoistApiService } from './todoist-api.service';

@Injectable()
export class TodoistService {
  private readonly defaultProjectName: string;

  constructor(private readonly todoistApiService: TodoistApiService) {
    this.defaultProjectName =
      process.env.DEFAULT_PROJECT_NAME || 'Ginny Shopping List';
  }

  async addTask(accessToken: string, content: string) {
    const projects = await this.todoistApiService.getUsersProjects(accessToken);

    let targetProject = projects.find(
      (p) => p.name === this.defaultProjectName,
    );
    if (!targetProject) {
      targetProject = await this.todoistApiService.addNewProject(
        accessToken,
        this.defaultProjectName,
      );
    }

    const task = await this.todoistApiService.addNewTask(
      accessToken,
      content,
      targetProject.id,
    );

    console.log('Todoist: New task added', task);

    return task;
  }
}
