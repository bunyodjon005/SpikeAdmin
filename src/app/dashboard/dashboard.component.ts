import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  constructor(public dialog:Dialog){
    
  }
  menu() :void{
   
  this.dialog.open(SidenavComponent )
  }
  knop(){
this.expresion=!this.expresion
  }
  expresion:boolean=false;
  mains:boolean=false

}
