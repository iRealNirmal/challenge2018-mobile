import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { ProfilesPage } from '../profiles/profiles.page';
import { NearmePage } from '../nearme/nearme.page';
import { CartPage } from '../cart/cart.page';
import { HistoryPage } from '../history/history.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path:'profiles',
        outlet: 'profiles',
        component: ProfilesPage
      },
      {
        path:'nearme',
        outlet: 'nearme',
        component: NearmePage
      },
      {
        path:'cart',
        outlet: 'cart',
        component: CartPage
      },{
        path: 'history',
        outlet: 'history',
        component: HistoryPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
