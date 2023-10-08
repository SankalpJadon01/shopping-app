import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Cart.model';
import { CartTemplate } from '../CartTemplate.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  add(c : Cart){
    this.http.post("http://localhost:9003/cart/add",c).subscribe(data=>data=c);
  }
  delete(cid : number){
    return this.http.delete("http://localhost:9003/cart/"+cid);
  }
  list(custid : string){
    return this.http.get<CartTemplate[]>("http://localhost:9004/cart/list/"+custid);
  }
}
