import { Component } from '@angular/core';
import { GifService } from 'src/app/gif/services/service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor( private sidebarService: GifService ){ }

  get tagSidebar(){
    return this.sidebarService.historyTag;
  }

  searchTagSidebar( tag:string ){
    this.sidebarService.searchTag(tag);
  }
}
