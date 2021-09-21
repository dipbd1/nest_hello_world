import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService {
  // Here will be the weather service logic
  // and also the schema for weather object
  constructor(private configService: ConfigService) {}
  getApiKey(): string {
    // console.log(this.configService);
    return this.configService.get<string>('WEATHER_KEY');
  }
}
