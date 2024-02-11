import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { OpenFoodFactsResponse } from './types';

@Injectable()
export class OpenFoodFactsApiService {
  constructor(private readonly httpService: HttpService) {}

  async barcodeLookup(barcode: string): Promise<OpenFoodFactsResponse> {
    const res = await this.httpService
      .get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .toPromise();
    console.log(`OpenFoodFactsApi: Got ${res.data.status} for ${barcode}`);
    return res.data;
  }
}
