import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Customer } from '../interfaces/customer.interface';
import { CUSTOMERS } from '../consts/mocks/customer.const';



@Injectable()
export class CustomersService {
customers: Customer[] = CUSTOMERS

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
