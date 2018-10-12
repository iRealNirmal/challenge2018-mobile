import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events, ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, ReactiveFormsModule   } from '@angular/forms';

import { Storage } from '@ionic/storage';
import {AuthnticationService} from '../service/authntication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;

  constructor(public auth: AuthnticationService,
    public events: Events,
    private route:Router,
    private storage:Storage,
    private toast: ToastController){}

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }

  login(){
    this.auth.login(this.loginform.value).subscribe(
      suc => {
        console.log(`saved successfully ${suc}`);
        this.storage.set('userName', this.loginform.value.username);
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

}
