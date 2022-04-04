import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss'],
})
export class AddnoteComponent implements OnInit {
  addFormData!: FormGroup;
  id: any;
  constructor(
    private fb: FormBuilder,
    private _appservice: AppService,
    private _router: Router
  ) {}

  @Output() data = new EventEmitter();

  ngOnInit(): void {
    // GET THE HOLE FORM DATA
    this._appservice.subject.subscribe((res: any) => {
      if (!res) {
        this.addFormData = this.fb.group({
          title: [''],
          description: [''],
        });
      } else {
        this.addFormData = this.fb.group({
          title: [res.title],
          description: [res.description],
        });
      }
    });
  }
  // GET THE FROM DATA IN FOR NOTES
  getFormData() {
    this._appservice.subject.subscribe((res:any)=>{
      if(!res._id){
        this._appservice.addData(this.addFormData.value).subscribe(
          (res: any) => {
            this._router.navigate(['/note']).then(() => {
              window.location.reload();
            });
            this.data.emit(true);
          },
          (err) => console.log(err)
        );
      }else{
        this._appservice.editNote(this.addFormData.value,res._id).subscribe((result:any)=>{
          console.log(result)
        })
      }
    })
    this.addFormData.reset();
  }
}
