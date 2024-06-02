import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardscomComponent } from './dashboardscom/dashboardscom.component';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';

const routes: Routes = [
  // {path:'dashboard',component:DashboardComponent},
  // {path:'',
  //   redirectTo:'dashboard',
  //   pathMatch:'full'
  // },
  {path:'dashboards',component:DashboardscomComponent},
  {path:'badge',component:BadgeComponent},
  {path:'chips',component:ChipsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
