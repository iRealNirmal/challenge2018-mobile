import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';
import { Router  , ActivatedRoute } from '@angular/router';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartList:any=[];
  constructor(private cart:CartService, private toast:ToastController){
    this.cartList = cart.getList()
   }

  ngOnInit() {
  }

  checkout(){
    this.cart.buy().subscribe(
      async value => {
        let toast = await this.toast.create({
          message: 'Items bought',
          duration: 2000
        });
    
        toast.present();
        this.cartList=[];
       //console.log(value);
      },
      err => {
        console.log(err);
      }
    );
    //this.cartList
  }

  async removeCart(index){
    let toast = await this.toast.create({
      message: 'Item removed',
      duration: 2000
    });

    toast.present();
    this.cartList==this.cart.remove(index);
  }

}
