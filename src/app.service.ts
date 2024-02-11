import { Injectable } from '@nestjs/common';
import { TodoistService } from './integrations/todoist/todoist.service';
import { OpenFoodFactsResponse } from './open-food-facts/types';
import { OpenFoodFactsService } from './open-food-facts/open-food-facts.service';

@Injectable()
export class AppService {
  constructor(
    private readonly openFoodFactsService: OpenFoodFactsService,
    private readonly todoistService: TodoistService,
  ) {}

  async addTask(accessToken: string, barcode: string) {
    const foodFactsResponse: OpenFoodFactsResponse =
      await this.openFoodFactsService.barcodeLookup(barcode);
    if (foodFactsResponse.status === 0) {
      throw new Error('Barcode not found');
    }

    const task = await this.todoistService.addTask(
      accessToken,
      foodFactsResponse.product.product_name,
    );

    console.log(
      `AppService: Added new task "${foodFactsResponse.product.product_name}" to Todoist`,
    );

    return task;
  }
}
