import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string = '.assets/images.descarga.jpg';
  imageDefault='';
  
  imgError(){
    this.img= this.imageDefault;
  }


}
