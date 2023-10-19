import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{
  
  @Input()
  public gifsCardList:Gif[] = [];

}
