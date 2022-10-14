import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customerModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl:string="http://localhost:8081/api/customer";

  constructor(private http:HttpClient) { }

  addCustomer(cust:Customer){
    return this.http.post(this.baseUrl,cust);
  }
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl);
  }
  getById(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl+"/"+id);
  }
  deleteById(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
  updateCustomer(customer:Customer,id:number){
    return this.http.put(this.baseUrl+"/"+id,customer);
  }
}
