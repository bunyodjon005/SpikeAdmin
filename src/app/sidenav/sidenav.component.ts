import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() totalpages:number=0;
   ngOnInit(): void {
    
   }
  
   constructor(public dialogs:Dialog , public authen:AuthenticationService){}
  menu() :void{
   this.dialogs.open(SidenavComponent)}
//   knop(){
// this.expresion=!this.expresion
//   }

logout(){
  this.authen.logout();
  console.log("User Tizimni tark etdi!");
  
}
logedin(){
  this.authen.isLoggedin();
  console.log("Logedin");
  
}
}
