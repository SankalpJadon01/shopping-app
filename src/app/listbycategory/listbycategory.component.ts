import { Component } from '@angular/core';
import { Product } from '../Product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Cart } from '../Cart.model';
import { Customer } from '../Customer.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-listbycategory',
  templateUrl: './listbycategory.component.html',
  styleUrls: ['./listbycategory.component.css']
})
export class ListbycategoryComponent {

  products : Product[] = [];
  cat : string = '';
cart : Cart = new Cart();
customer : Customer[] = [] ;

  constructor(private service : ProductService, private router : Router,private cservice : CartService){
    this.service.all().subscribe(data => this.products=data);
  }
  search(){
    this.service.listByCategory(this.cat).subscribe(data => this.products=data);

  }
  add(id : number){
    sessionStorage.setItem("id",id+"");
    this.cart.custid = sessionStorage.getItem("username") as string ;
    this.cart.id = parseInt(sessionStorage.getItem("id")as string);
    this.cservice.add(this.cart);
    }
}
