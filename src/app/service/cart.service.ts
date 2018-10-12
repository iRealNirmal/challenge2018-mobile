import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList:any = [];

  constructor(public http: HttpClient) { }

  add(product){
    const foundItem = this.cartList.filter(function(item) {
      return item.id === product.id;
    })[0];

    if(foundItem) {
      product.count+=product.count;
    }else {
      product.count=1;
      this.cartList.push(product);
    }
  }

  getList(){
    return this.cartList
  }

  remove(index){
    this.cartList.splice( index, 1 );
    return this.cartList;
  }

  buy(){
    let rewards=0, total=0;
    this.cartList.forEach((val, key) => {
      let product = this.cartList[key];
      rewards += (product.rewards * product.count);
      total += (product.price * product.count);
    });
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

    const item = this.cartList;
    const date =  new Date();

    let order = { item, total, rewards, date };

    return this.http.post("http://192.168.1.102:3000/application/buy", order, httpOptions).pipe(map((response: Response) => console.log(response) ));
  }
}
