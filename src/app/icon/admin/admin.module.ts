import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { IconsComponent } from '../icons/icons.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,

  ],
 
})
export class AdminModule { }
