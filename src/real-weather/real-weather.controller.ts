import { Observable } from 'rxjs';
import { Controller, Get, Param } from '@nestjs/common';
import { RealWeatherService } from './real-weather.service';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Controller('real-weather')
export class RealWeatherController {
  constructor(private readonly realWeatherService: RealWeatherService) {}
  @Get()
  async getRealWeather(): Promise<string> {
    return 'To get real weather you need to make request like real-weather/apikey/place';
  }
  @Get('/:apikey/:place')
  getRealWeatherByPlace(
    @Param('apikey') apikey: string,
    @Param('place') place: string,
  ): any {
    return this.realWeatherService
      .getRealWeatherByPlace(apikey, place)
      .pipe(map((res) => res.data));
  }
}
