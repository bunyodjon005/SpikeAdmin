import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  navbarfixed:boolean=false;
@HostListener("window:scroll",['$event']) onscrol(){
if(window.scrollY > 6){
  this.navbarfixed=true;
}
else {
  this.navbarfixed=false;
}
}

image = [ 
  { ImageSrc:'./assets/photo_2024-06-19_23-56-49-removebg-preview (1).png',
    ImageAlt:"person1"
  },
  {
    ImageSrc:'./assets/Screenshot_3-removebg-preview (1).png',
    ImageAlt:"person2"
  },
  {
    ImageSrc:"./assets/Screenshot_4-removebg-preview (1).png",
    ImageAlt:"person3"

  }
  , {
    ImageSrc:"./assets/Screenshot_5-removebg-preview (1).png",
    ImageAlt:"natural1"
  }
  , {
    ImageSrc:"./assets/Screenshot_6-removebg-preview.png",
    ImageAlt:"natural2"

  }
]

image2=[
  
]
}
