import { RestService } from './rest.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends RestService {
  override resource: string = '/customers';
}
