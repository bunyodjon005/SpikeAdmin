import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarfixed:boolean=false;
@HostListener("window:scroll",['$event']) onscrol(){
if(window.scrollY > 100){
  this.navbarfixed=true;
}
else {
  this.navbarfixed=false;
}
}
}
