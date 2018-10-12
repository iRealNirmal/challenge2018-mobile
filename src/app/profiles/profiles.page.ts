import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule   } from '@angular/forms';
import {ProfileService} from '../service/profile.service';
import {AuthnticationService} from '../service/authntication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  public profiles:any;
  profileform: FormGroup;
  constructor(private profile:ProfileService, private auth:AuthnticationService,  private route:Router) { 
  }

  ngOnInit() {
    this.profileform = new FormGroup({
      
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'), Validators.minLength(4), Validators.maxLength(30)]),
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      loyalitNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      points: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }

  ionViewWillEnter(){
    this.loadData();
  }

  loadData(refresher?){
    this.profile.getProfile().subscribe(
      value => {
        this.profiles = value;
        delete this.profiles._id;
        delete this.profiles.id;
        
        this.profileform.setValue(this.profiles);
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

  profileUpdate(){
    console.log('profile updated');
  }

  async logout(){
    await this.auth.logout();
    this.route.navigate(['/login']);
  }

}
