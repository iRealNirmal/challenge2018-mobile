import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import {ProfileService} from '../service/profile.service';
import {CartService} from '../service/cart.service';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {
  productList:any;
  constructor(private route: ActivatedRoute, private profile: ProfileService, private cart: CartService,
    public toast: ToastController, private routes: Router,private sharing: SocialSharing) { 
    this.route.params.subscribe((parmas) => {console.log(parmas.id)});
    this.profile.getShopList().subscribe(
      value => {
       this.productList = value;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }
  
  async addCart(product){
    this.cart.add(product);
    let toast = await this.toast.create({
      message: 'Product Added in cart.',
      duration: 2000
    });

    toast.present();
    
  }

  goToCart(){
    this.routes.navigate(['/cart/']);
  }

  async share(){
    this.sharing.share('TechChallenge','2018','./assets/images/challenge.png').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}
