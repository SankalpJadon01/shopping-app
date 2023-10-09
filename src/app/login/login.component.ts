import { Component } from '@angular/core';
import { Customer } from '../Customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string = '';
  password : string = '';
  c : Customer[]=[];
  constructor(private service: CustomerService, private router: Router){
    this.service.list().subscribe(data => this.c = data);
  }
  login(){
    if(this.username=="sankalp101"&&this.password=="12345"){
      sessionStorage.setItem("username","sankalp101");
      sessionStorage.setItem("navbar1", "true");
      sessionStorage.setItem("navbar2","false");
      // sessionStorage.setItem("password","12345");
      this.router.navigate(['/admindash']);
      setTimeout(()=>{alert("Welcome , Admin")},1000);
    }
    else if (this.c.find(p=>p.password==this.password && p.custid==this.username)!=undefined){
     console.log(this.c);
      sessionStorage.setItem("username",this.username);
      sessionStorage.setItem("navbar2", "true");
      sessionStorage.setItem("navbar1","false");
      sessionStorage.setItem("username",this.username);
      // sessionStorage.setItem("password",this.password);
      this.router.navigate(['/customerdash']);
      setTimeout(()=>{alert("Welcome, "+sessionStorage.getItem("username"))},1000);
  }
else{
  this.router.navigate(['/login']);
  setTimeout(()=>{alert("Invalid Username/Password")},1000);
}
}
}