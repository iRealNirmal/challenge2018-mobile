import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, ReactiveFormsModule   } from '@angular/forms';

import {AuthnticationService} from '../service/authntication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupform: FormGroup;
  constructor(public auth: AuthnticationService,
    private route:Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ngOnInit(){
    this.signupform = new FormGroup({
      
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'), Validators.minLength(4), Validators.maxLength(30)]),
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }

  signup(){
    console.log(this.signupform.value);
    this.auth.register(this.signupform.value).subscribe(
      (suc) => {
        console.log(`saved successfully ${suc}`);
        this.route.navigate(['/login']);
      },
      (err) => {
        console.log(`error ${err}`);
      }
    );
  }

}
