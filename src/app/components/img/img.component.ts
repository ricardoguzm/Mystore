import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter();
  imagenDefault='./assets/images/defaulf.png';
  
  constructor(){}
  ngOnInit(): void {}
  imgError(){
    this.img= this.imagenDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit();
  }


}
