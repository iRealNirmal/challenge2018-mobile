import { Component } from '@angular/core';
import {ProfileService} from '../service/profile.service';
import { Platform, NavController } from '@ionic/angular';
import { DetailViewPage } from '../detail-view/detail-view.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  shops:any;
  constructor(private profile: ProfileService,private platform:Platform, private nav: NavController ){
  }

  ionViewWillEnter(){
        this.loadData();
  }

  loadData(refresher?){
    this.profile.getShopAll().subscribe(
      value => {
       this.shops = value;
       if(refresher){
          refresher.target.complete();
       }
      },
      err => {
        if(refresher){
          refresher.target.complete();
       }
        console.log(err);
      }
    );
  }



  // seemore(id){
  //   this.nav.push(DetailViewPage, {
  //     id: id
  //   });
  // }
}
