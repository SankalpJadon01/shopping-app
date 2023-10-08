import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../Customer.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

profile : Customer = new Customer();

  constructor(private service : CustomerService){
    this.service.find(sessionStorage.getItem("username") as string).subscribe(data=> this.profile=data);
    console.log(this.profile);
  }

}
