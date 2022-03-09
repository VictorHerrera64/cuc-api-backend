import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'SOLICITUD AL PATH PRINCIPAL';
  }
}
