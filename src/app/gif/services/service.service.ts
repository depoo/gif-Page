import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private serviceHttp: HttpClient) { 
    this.loadLocalStorage()
  }

  // propiedad que usa la interface Gif
  public listGif: Gif[] = [];
  // propiedad apiKey
  private apiKey:string = 'KnoTGMoSluNAbnHNQb3clNabEToKodVu'
  //propiedad url Api
  private apiUrl:string = 'https://api.giphy.com/v1/gifs/'
  // propiedad que almacena palabras
  private _tagHistory:string[] = []

  get historyTag(){
    return [...this._tagHistory]
  }

  // método que organizara la lista de búsqueda
  private organizeHistory( tag:string){
    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift( tag );
    this._tagHistory = this.historyTag.splice(0,10);

    this.saveLocalStorage()
  }

  // método para almacenar en el LocalStorage
  private saveLocalStorage(){
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

  // método para cargar la data del localstorage en la vista
  loadLocalStorage(){
    if(!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse( localStorage.getItem('history')! );
    
    if(this._tagHistory.length === 0 ) return;
    this.searchTag(this._tagHistory[0])
  }

  // método que recibe un parametro para almacenar y mostrarse en el sidebar
  searchTag( tag:string ):void {
    if(tag.length === 0 ) return;

    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')

    this.serviceHttp.get<SearchResponse>(`${this.apiUrl}search`, { params })
      .subscribe( response =>{
        this.listGif = response.data

      })
  }


}
