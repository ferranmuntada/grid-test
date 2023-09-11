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

  static validateAddress = ($data: any) => {
    console.log('validateAddress recibe ', $data);
    return Promise.resolve(true);
  };

  static sortOrderChangeAddress = ($data: any) => {
    console.log('sortOrderChangeAddress recibe ', $data);
  };

  static calculateDisplayValue = ($data: any) : any => {
    console.log('calculateDisplayValue recibe ', $data);
    return ` "$" + ${$data?.CompanyName}`;
  };
}
