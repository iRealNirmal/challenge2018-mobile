import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {ProfileService} from '../service/profile.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nearme',
  templateUrl: './nearme.page.html',
  styleUrls: ['./nearme.page.scss'],
})
export class NearmePage implements OnInit {
  shops:any;
  constructor(private profile: ProfileService,private geolocation: Geolocation, public toastController: ToastController) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(refresher?){
    this.geolocation.getCurrentPosition().then((resp) => {
      //console.log(resp.coords);
       this.profile.getShop(resp.coords.latitude,resp.coords.longitude).subscribe(
        value => {
          if(refresher){
            refresher.target.complete();
         }
         this.shops = value;
        },
        err => {
          if(refresher){
            refresher.target.complete();
         }
          console.log(err);
        }
      );
     }).catch(async (error) => {
      const toast = await this.toastController.create({
        message: error,
        showCloseButton: true,
        closeButtonText: 'Done'
      });
      toast.present();
      console.log('Error getting location', error);
     });
  }

}
