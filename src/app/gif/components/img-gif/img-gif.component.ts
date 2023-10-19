import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gif-img-gif',
  templateUrl: './img-gif.component.html'
})
export class ImgGifComponent implements OnInit {

  @Input()
  public gifImage!: Gif;

  ngOnInit(): void {
    if(!this.gifImage ) throw new Error('Gif property is required.');
  }
}

