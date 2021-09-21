import { Test, TestingModule } from '@nestjs/testing';
import { RealWeatherService } from './real-weather.service';

describe('RealWeatherService', () => {
  let service: RealWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealWeatherService],
    }).compile();

    service = module.get<RealWeatherService>(RealWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
