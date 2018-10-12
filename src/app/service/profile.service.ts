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
export class ProfileService {

  constructor(public http: HttpClient,public storage: Storage) {
  }

  getProfile():  Observable<any>{
    console.log('get profile')
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://192.168.1.102:3000/application/profile", httpOptions).pipe(map((response: Response) => response ));
  }

  getShop(lat,lng):  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };
    let location = {lat,lng};

    return this.http.post("http://192.168.1.102:3000/application/shopnear", location, httpOptions).pipe(map((response: Response) => response ));
  }

  getShopAll():  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };
    return this.http.post("http://192.168.1.102:3000/application/shop", httpOptions).pipe(map((response: Response) => response ));
  }
  getShopList():  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };
    return this.http.post("http://192.168.1.102:3000/application/shoplist", httpOptions).pipe(map((response: Response) => response ));
  }

  purchaseHistory():  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };
    return this.http.post("http://192.168.1.102:3000/application/purchaseHistory", httpOptions).pipe(map((response: Response) => response ));
  }

  order(id):  Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };
    return this.http.post("http://192.168.1.102:3000/application/viewOrder", { id }, httpOptions).pipe(map((response: Response) => response ));
  }

}
