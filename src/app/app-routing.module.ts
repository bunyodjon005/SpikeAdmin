import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardscomComponent } from './dashboardscom/dashboardscom.component';

const routes: Routes = [
  // {path:'dashboard',component:DashboardComponent},
  // {path:'',
  //   redirectTo:'dashboard',
  //   pathMatch:'full'
  // },
  {path:'dashboards',component:DashboardscomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
