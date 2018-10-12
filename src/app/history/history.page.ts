import { Component } from '@angular/core';
import {ProfileService} from '../service/profile.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {
  buyHistory:any;
  constructor(private profile:ProfileService) { 
    this.loadData();
  }

  loadData(refresher?){
    this.profile.purchaseHistory().subscribe(
      value => {
       this.buyHistory = value;
        if(refresher){
          refresher.target.complete();
        }
      },
      err => {
        console.log(err);
        if(refresher){
          refresher.target.complete();
        }
      }
    );
  }

  

}
