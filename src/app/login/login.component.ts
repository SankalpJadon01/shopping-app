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
  role : string = '';
  c : Customer[]=[];
  constructor(private service: CustomerService, private router: Router){
    this.service.list().subscribe(data => this.c = data);
  }
  login(){
    if(this.username=="sankalp101"&&this.password=="12345"&&this.role=="admin"){
      sessionStorage.setItem("username","sankalp101");
      sessionStorage.setItem("password","12345");
      this.router.navigate(['/admindash']);
      setTimeout(()=>{alert("Logged in as Admin")},1000);
    }
    else if (this.c.find(p=>p.password==this.password && p.custid==this.username)!=undefined && this.role=="user"){
     console.log(this.c);
      sessionStorage.setItem("username",this.username);
      sessionStorage.setItem("password",this.password);
      console.log(sessionStorage.getItem("username"));
      this.router.navigate(['/customerdash']);
      setTimeout(()=>{alert("Logged in as User")},1000);
  }
else{
  this.router.navigate(['/login']);
  setTimeout(()=>{alert("Invalid Username/Password")},1000);
}
}
}