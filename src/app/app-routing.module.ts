import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardscomComponent } from './dashboardscom/dashboardscom.component';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

const routes: Routes = [
  // {path:'dashboard',component:DashboardComponent},
  // {path:'',
  //   redirectTo:'dashboard',
  //   pathMatch:'full'
  // },
  {path:'dashboards',component:DashboardscomComponent},
  {path:'badge',component:BadgeComponent},
  {path:'chips',component:ChipsComponent},
  {path:'list',component:ListComponent},
  {path:'menu',component:MenuComponent},
  {path:'tooltips',component:TooltipsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
