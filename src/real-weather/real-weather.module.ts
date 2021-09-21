import { Module } from '@nestjs/common';
import { RealWeatherService } from './real-weather.service';
import { RealWeatherController } from './real-weather.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RealWeatherController],
  providers: [RealWeatherService],
})
export class RealWeatherModule {}
