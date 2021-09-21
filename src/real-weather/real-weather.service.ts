import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class RealWeatherService {
  constructor(private httpService: HttpService) {}
  // now we will write a real weather service which will pull data from the source and
  // make it visible for you.
  getRealWeatherByPlace(
    key: string,
    location: string,
  ): Observable<AxiosResponse<any>> {
    // console.log(this.configService);
    return this.httpService.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    );
  }
}
