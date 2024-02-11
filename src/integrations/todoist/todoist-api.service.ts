import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  AddNewProjectResponse,
  AddNewTaskResponse,
  GetUsersProjectResponse,
} from './types';

@Injectable()
export class TodoistApiService {
  constructor(private readonly httpService: HttpService) {}

  async getUsersProjects(
    accessToken: string,
  ): Promise<GetUsersProjectResponse[]> {
    try {
      const res = await this.httpService
        .get(`https://api.todoist.com/rest/v2/projects`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .toPromise();
      console.log(`TodoistApi: Got ${res.data.length} projects`);
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  }

  async addNewProject(
    accessToken: string,
    name: string,
  ): Promise<AddNewProjectResponse> {
    try {
      const res = await this.httpService
        .post(
          `https://api.todoist.com/rest/v2/projects`,
          {
            name,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .toPromise();
      console.log(`TodoistApi: Added a new project "${res.data.name}"`);
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  }

  async addNewTask(
    accessToken: string,
    content: string,
    projectId: string,
  ): Promise<AddNewTaskResponse> {
    try {
      const res = await this.httpService
        .post(
          `https://api.todoist.com/rest/v2/tasks`,
          {
            content,
            project_id: projectId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .toPromise();
      console.log(`TodoistApi: Added a new task "${res.data.content}"`);
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  }
}
