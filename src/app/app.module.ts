import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardscomComponent } from './dashboardscom/dashboardscom.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BadgeComponent } from './badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ChipsComponent } from './chips/chips.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { IconsComponent } from './icons/icons.component';
import { TablesComponent } from './tables/tables.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { ModalIconComponent } from './modal-icon/modal-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    DashboardscomComponent,
    BadgeComponent,
    ChipsComponent,
    ListComponent,
    MenuComponent,
    TooltipsComponent,
    RegisterComponent,
    IconsComponent,
    TablesComponent,
    HeaderComponent,
    IconComponent,
    ModalIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
NgxChartsModule,
MatBadgeModule,
HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
