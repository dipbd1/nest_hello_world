import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World!
Please Go to 'api/weather' for detail`;
  }
}
