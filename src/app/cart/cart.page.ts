import { Component, OnInit, NgZone } from '@angular/core';
import {CartService} from '../service/cart.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { AlertController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartList:any=[];
  constructor(private cart:CartService, private toast:ToastController, private qrScanner: QRScanner,
    private zone: NgZone,
    public Alert: AlertController){
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
  async presentAlert(e='You need to allow camera permission') {
    const alert = await this.Alert.create({
     header: 'Permission Error',
     subHeader: 'Camera Permission error',
     message: e,
     buttons: ['OK']
   });

   await alert.present();
 }
  addCart(){
    // this.cart.fetch({id:'5bbe29b83251c503f425d61f'}).subscribe(
    //   async value => {
    //     this.cart.add(value);
    //     this.cartList = this.cart.getList();
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    window.document.querySelector('ion-app').classList.add('transparentBody');
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted

       var ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//        alert('Scanned something'+ text);
//text
this.cart.fetch(text).subscribe(
  async value => {
    await this.cart.add(value);
    this.zone.run(() => {
      this.cartList = this.cart.getList();
  });

  //  debugger;
  },
  err => {
    console.log(err);
  }
);
        ionApp.style.display = "block";
         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
         window.document.querySelector('ion-app').classList.remove('transparentBody')
       });
       ionApp.style.display = "none";
       this.qrScanner.show();

     } else if (status.denied) {
      this.presentAlert();
     } else {
      this.presentAlert('don\'t know');
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is',  this.presentAlert(e)));
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
