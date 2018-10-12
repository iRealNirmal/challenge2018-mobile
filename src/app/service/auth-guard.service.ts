import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthnticationService } from './authntication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private auth:AuthnticationService, private route:Router) { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state.url);//'candidates'
    console.log('i am checking to see if you are logged in');
      let loggedIN =  await this.auth.authenticate();
    if(loggedIN){
      return true;
    }else{
      if(state.url === '/login' || state.url === '/signup'){
        return true;
      }
        this.route.navigate(['/login']);
        return false;
      
    }
  }

  async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log('checking child route access');
    let loggedIN =  await this.auth.authenticate();
    if(loggedIN){
      if(state.url === '/login' || state.url === '/signup'){
        this.route.navigate([]);
        return true;
      }
      return true;
    }else{
      if(state.url === '/login' || state.url === '/signup'){
        return true;
      }
      return false;
    }
  }
}
