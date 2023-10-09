import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  add(p : Product){
    this.http.post("http://localhost:9001/product/add",p).subscribe(data=> data = p);
  }
  find(id : number){
    return this.http.get<Product[]>("http://localhost:9004/product/"+id);
  }
  all(){
    return this.http.get<Product[]>("http://localhost:9004/product/all");
  }
  delete(id : number){
    return this.http.delete<Product[]>("http://localhost:9001/product/"+id);
  }
  update(p : Product){
    this.http.put("http://localhost:9001/product/update",p).subscribe(data=> data= p);
  }
 listByCategory(category : string){
     return this.http.get<Product[]>("http://localhost:9004/product/category/"+category);
  }
}
