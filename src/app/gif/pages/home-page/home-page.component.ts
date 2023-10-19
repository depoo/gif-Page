import { Component } from '@angular/core';
import { GifService } from '../../services/service.service';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  constructor( private gifServiceHomePage: GifService ) { }

  get gifHomePage():Gif[] {
    return this.gifServiceHomePage.listGif;
  }
}
