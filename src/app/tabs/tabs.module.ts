import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { NearmePageModule } from '../nearme/nearme.module';
import { HomePageModule } from '../home/home.module';
import { AccountPageModule } from '../account/account.module';
import { CartPageModule } from '../cart/cart.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    AccountPageModule,
    NearmePageModule,
    CartPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
