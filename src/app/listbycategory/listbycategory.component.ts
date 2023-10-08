import { Component } from '@angular/core';
import { Product } from '../Product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbycategory',
  templateUrl: './listbycategory.component.html',
  styleUrls: ['./listbycategory.component.css']
})
export class ListbycategoryComponent {

  products : Product[] = [];
  cat : string = '';

  constructor(private service : ProductService, private router : Router){
    this.service.all().subscribe(data => this.products=data);
  }
  search(){
    this.service.listByCategory(this.cat).subscribe(data => this.products=data);

  }
  add(id : number){
    sessionStorage.setItem("id",id+"");
    console.log(sessionStorage.getItem("id"));
    console.log("hello");
    this.router.navigate(['/cart']);
    }
}
