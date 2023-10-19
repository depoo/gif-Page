import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
  
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required.');
  }

  //método que cambia el valor de nuestra propiedad
  onLoad(){
    this.hasLoaded = true
  }
}
