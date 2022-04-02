import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _urlEdit='http://localhost:3001/api/notes/getnotes';
  constructor(private http:HttpClient) { }

  showData(){
    return this.http.get(this._urlEdit);
  }

}
