import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes:any;
  check:boolean=true;
  oneDetail:any;
  editformdata:any;
  constructor(private _appervice:AppService,private _router:Router) { }

  ngOnInit(): void {

    this._appervice.showData().subscribe((res:any)=>{
      console.log(res);
      this.notes=res.result;
    },err=>console.log(err));
  }
  addNote(){
    this._router.navigate(['note/addnote'])
    this.check=false
  }
  outPut(data:any){
    this.check=data;
  }
  // DELETE THE NOTE
  delete(id:any){
    this._appervice.deleteNote(id).subscribe((res:any)=>{
      console.log(res)
      if(res.result){
        this.notes = this.notes.filter((item:any)=> item._id != id)
      }
    },err=>console.log(err));
  }
  // EDIT THE NOTE
  edit(elem:any){
    this._appervice.subject.next(elem);
    this._router.navigate(['/note/addnote'])
  }
}
