import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import {ProfileService} from '../service/profile.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  orders:any;
  id:number;
  constructor(private route: ActivatedRoute, private profile: ProfileService) { 
    this.route.params.subscribe((parmas) => {this.id = parmas.id});
    this.profile.order(this.id).subscribe(
      value => {
       this.orders = value;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
