import { Test, TestingModule } from '@nestjs/testing';
import { RealWeatherController } from './real-weather.controller';
import { RealWeatherService } from './real-weather.service';

describe('RealWeatherController', () => {
  let controller: RealWeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealWeatherController],
      providers: [RealWeatherService],
    }).compile();

    controller = module.get<RealWeatherController>(RealWeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
