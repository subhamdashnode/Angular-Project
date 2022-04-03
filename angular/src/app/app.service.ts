import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private _urlGet='http://localhost:3001/api/notes/getnotes';
  private _urlAdd='http://localhost:3001/api/notes/newnote';
  private _urlDelete='http://localhost:3001/api/notes/deletenote/';
  private _urlEdit='http://localhost:3001/api/notes/editnote/';

  subject= new BehaviorSubject<any>({_id:'',title:'',description:''});

  constructor(private http:HttpClient) { }

  showData(){
    return this.http.get(this._urlGet);
  }
  addData(data:any){
    return this.http.post(this._urlAdd,data)
  }
  deleteNote(id:any){
    return this.http.delete(this._urlDelete+id);
  }
  editNote(data:any,id:any){
    return this.http.put(this._urlEdit+id,data);
  }
}
