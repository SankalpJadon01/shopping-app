import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';
import { Cart } from '../Cart.model';
import { Product } from '../Product.model';
import { Customer } from '../Customer.model';
import { CartTemplate } from '../CartTemplate.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [];
  cart: CartTemplate[] = [];
  constructor(
    private cartservice: CartService,
    private proservice: ProductService,
    private custservice: CustomerService,
    private router: Router
  ) {
    this.loadProducts();
  }
  loadProducts(): void {
    this.cartservice
      .list(sessionStorage.getItem('username') as string)
      .subscribe((data) => (this.cart = data));
  }
  delete(cid: number) {
    if (confirm('Are you sure to delete!'))
      this.cartservice.delete(cid).subscribe(() => {
        this.loadProducts();
      });
  }
}
