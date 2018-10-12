// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  loading:any;
  constructor(public loadingController: LoadingController) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
        withCredentials: true
    });

    this.presentLoading()

    return next.handle(request).pipe( tap( () => {
        setTimeout(()=>{//for safety
          if(this.loading){
              this.loading.dismiss();
          }
        },1000);
    }) 
  );
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please Wait'
    });
    return await this.loading.present();
  }


}