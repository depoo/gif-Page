import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifService } from '../../services/service.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTagInBox()"
      #txtTagInput
    />
  `
})
export class SearchBoxComponent {

  constructor( private boxService: GifService){ }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // método que obtenemos el valor del buscador
  searchTagInBox(){
    const newTag = this.tagInput.nativeElement.value
    this.boxService.searchTag( newTag );
    

    this.tagInput.nativeElement.value = ''
  }
}
