import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  async add(c : Customer){
    await this.http.post("http://localhost:9002/customer/add",c).subscribe(data => data = c);
  }
  find(custid : string){
    return this.http.get<Customer>("http://localhost:9004/customer/"+custid);
  }
  list(){
    return this.http.get<Customer[]>("http://localhost:9004/customer/all");
  }
  authenticate(custid : string , password : string){
    return this.http.get<Customer[]>("http://localhost:9004/customer/login?custid="+custid+"&password="+password);
  }
}
