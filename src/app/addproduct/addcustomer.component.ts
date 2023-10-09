import { Component } from '@angular/core';
import { Customer } from '../Customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  update : boolean = sessionStorage.getItem("update")=="true"?true:false;
  id : number = parseInt(sessionStorage.getItem("id") as string);
  p : Product = new Product();
  constructor(private service : ProductService, private router: Router){
    if(this.update)this.p.id=this.id;
  }

  save(){
    this.service.add(this.p);
    console.log(this.p);
    this.router.navigate(['/productlist']);
  }
}
