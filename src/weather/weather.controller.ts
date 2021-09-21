import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeatherApiKey(): Promise<string> {
    return 'this route will only work with a secret param';
  }

  @Get(':apiKeyPassword')
  async getApiKey(@Param() params): Promise<string> {
    if (params.apiKeyPassword === '12345') {
      return `${this.weatherService.getApiKey()}
      And now you have the API key to go further and request for a Weather, So 
      go to /api/real-weather`;
    } else {
      return 'Your entered password is wrong';
    }
  }
}
