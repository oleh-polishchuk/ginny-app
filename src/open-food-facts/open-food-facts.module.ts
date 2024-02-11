import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OpenFoodFactsService } from './open-food-facts.service';
import { OpenFoodFactsApiService } from './open-food-facts-api.service';

@Module({
  imports: [HttpModule],
  providers: [OpenFoodFactsService, OpenFoodFactsApiService],
  exports: [OpenFoodFactsService],
})
export class OpenFoodFactsModule {}
