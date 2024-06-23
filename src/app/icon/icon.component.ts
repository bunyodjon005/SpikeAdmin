import { Component , OnInit , Input , HostListener} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
interface caruselImage{
ImageSrc:string;
ImageAlt:string;

}
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent  implements OnInit{
@Input() images:caruselImage[]=[];
@Input() indicators=true;
@Input() controls=true;
contents:boolean=true;
selectedIndex=0;
  ngOnInit():void {

  }
  selectedImage(index:number) :void{
    this.selectedIndex=index;

  }
  onPrevClick():void{
if(this.selectedIndex ===0){
  this.selectedIndex = this.images.length - 1
} else {
  this.selectedIndex--;
}
  }
  onNextClick(){
    if(this.selectedIndex=== this.images.length-1){
      this.selectedIndex=0
    } else {
      this.selectedIndex++;
    }
  }
  navbarfixed:boolean=false;
  @HostListener("window:scroll",['$event']) onscrol(){
  if(window.scrollY > 5){
    this.navbarfixed=true;
  }
  else {
    this.navbarfixed=false;
  }
  }

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }


  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
}
