import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsApiService } from './open-food-facts-api.service';

describe('OpenFoodFactsApiService', () => {
  let service: OpenFoodFactsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [OpenFoodFactsApiService],
    }).compile();

    service = module.get<OpenFoodFactsApiService>(OpenFoodFactsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
