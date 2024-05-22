import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  constructor(public dialog:Dialog , public authen:AuthenticationService){}
  menu() :void{
   this.dialog.open(SidenavComponent)}
//   knop(){
// this.expresion=!this.expresion
//   }
onSubmit():void{  


  if(this.username,this.password){
    if(this.authen.Jwtapilogin(this.username,this.password)){
      console.log("Tizimga user kirdi!");
    }
    else {
      console.log("Xatolik");
      
    }
  }
}
logout(){
  this.authen.logout();
  console.log("User Tizimni tark etdi!");
  
}
logedin(){
  this.authen.isLoggedin();
  console.log("Logedin");
  
}
expresion:boolean=false;
mains:boolean=false;
username:string='';
password:string='';
}
