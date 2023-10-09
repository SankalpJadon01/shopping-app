import { Component } from '@angular/core';
import { Customer } from '../Customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {
  customer : Customer[] = [] ;
  
  constructor(private service: CustomerService){
    this.service.list().subscribe(data => this.customer=data);
  }
  
}
