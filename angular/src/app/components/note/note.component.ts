import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes:any;
  constructor(private _appervice:AppService) { }

  ngOnInit(): void {
    this._appervice.showData().subscribe((res:any)=>{
      console.log(res);
      this.notes=res.result;
    },err=>console.log(err));
  }

}
