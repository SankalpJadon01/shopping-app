import { Component } from '@angular/core';
import { Customer } from '../Customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {


  c : Customer = new Customer();
  constructor(private service : CustomerService, private router: Router){
  }
  save(){
    localStorage.setItem("username",this.c.custid);
    this.service.add(this.c);
    this.router.navigate(['/login']);
  }
}
