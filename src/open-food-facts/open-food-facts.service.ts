import { Injectable } from '@nestjs/common';
import { OpenFoodFactsResponse } from './types';
import { OpenFoodFactsApiService } from './open-food-facts-api.service';

@Injectable()
export class OpenFoodFactsService {
  constructor(private openFoodFactsApiService: OpenFoodFactsApiService) {}

  async barcodeLookup(barcode: string): Promise<OpenFoodFactsResponse> {
    return this.openFoodFactsApiService.barcodeLookup(barcode);
  }
}
