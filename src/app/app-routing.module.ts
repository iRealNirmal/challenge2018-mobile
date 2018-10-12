import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService], },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivateChild: [AuthGuardService], },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule', canActivateChild: [AuthGuardService], },
  { path: 'profiles', loadChildren: './profiles/profiles.module#ProfilesPageModule', canActivate: [AuthGuardService], },
  { path: 'nearme', loadChildren: './nearme/nearme.module#NearmePageModule', canActivate: [AuthGuardService], },
  { path: 'detailView/:id', loadChildren: './detail-view/detail-view.module#DetailViewPageModule', canActivate: [AuthGuardService], },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule', canActivate: [AuthGuardService], },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule', canActivate: [AuthGuardService], },
  { path: 'historyDetail/:id', loadChildren: './history-detail/history-detail.module#HistoryDetailPageModule', canActivate: [AuthGuardService], },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
