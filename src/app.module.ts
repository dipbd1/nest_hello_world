import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { WeatherModule } from './weather/weather.module';
import { RealWeatherModule } from './real-weather/real-weather.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    WeatherModule,
    RealWeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
