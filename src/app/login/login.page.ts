import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events, ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, ReactiveFormsModule   } from '@angular/forms';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Storage } from '@ionic/storage';
import {AuthnticationService} from '../service/authntication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;
  showFinger:boolean = false;

  constructor(public auth: AuthnticationService,
    public events: Events,
    private route:Router,
    private storage:Storage,
    private toast: ToastController,
    private faio: FingerprintAIO){
      
    }

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
    this.faio.isAvailable().then(
      async res => {
        const check = await this.auth.prevLogin();
        console.log(check);
        if(check){
          this.showFinger = true;
        }
      },
      err => console.error('TouchID is not available', err)
    );
  }

  login(){
    this.auth.login(this.loginform.value).subscribe(
      suc => {
        this.storage.set('userName', this.loginform.value.username);
        this.storage.set('password', this.loginform.value.password);
        this.storage.set('loggedin', true);
        this.events.publish('loggedin', this.loginform.value);
        this.route.navigate(['']);
      },
      async err => {
        let toast = await this.toast.create({
          message: 'Incorrect username or password.',
          duration: 2000
        });
    
        toast.present();
        console.log(`error ${err.statusText}`);
      }
    );
  }

  fingerLogin(){
    this.faio.show({
      clientId: 'loyalityApp',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
  })
  .then(async (result: any) => {
    let username, password;
    await this.storage.get('userName').then(data => {
      username = data;
    });
    await this.storage.get('password').then(data => {
      password = data;
    });
    this.auth.login({username,password}).subscribe(
      suc => {
        this.storage.set('loggedin', true);
        this.events.publish('loggedin', this.loginform.value);
        this.route.navigate(['']);
      },
      async err => {
        let toast = await this.toast.create({
          message: 'Seems like username and password has been changed, please do login.',
          duration: 2000
        });
        this.auth.logout();
        toast.present();
        this.showFinger = false;
        console.log(`error ${err.statusText}`);
      }
    );
  })
  .catch(async (error: any) => {
    let toast = await this.toast.create({
      message: error,
      duration: 2000
    });

    toast.present();
    console.log(`error ${error}`);
  });
}

}
