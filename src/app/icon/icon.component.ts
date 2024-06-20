import { Component , OnInit , Input} from '@angular/core';
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
}
