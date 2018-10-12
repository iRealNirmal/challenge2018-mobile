import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthnticationService {
  private isLoggedin:boolean = false;
  constructor(public http: HttpClient,public storage: Storage) {
  }

  register(data):  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://192.168.1.102:3000/auth/signup", JSON.stringify(data), httpOptions).pipe(map((response: Response) => {
      console.log(response);
    }));
  }

  login(data):  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      }),
      withCredentials: true
    };

    return this.http.post("http://192.168.1.102:3000/auth/signin", JSON.stringify(data), httpOptions).pipe(map((response: Response) => {
      let res:any = response;
      document.cookie = `connect.sid=s:${res.session}`;
      console.log(res.session);
      this.isLoggedin = true;
    }));
  }

  async authenticate(){
    await this.storage.get('userName').then(data=>
      {
        if(data)
        {
          this.isLoggedin = true;
        }
        else
        {
          this.isLoggedin = false;
        }
    });
    return this.isLoggedin;
  }

  async logout(){
    await this.storage.remove('userName');
    this.isLoggedin = false;
    return true;
  }
}
