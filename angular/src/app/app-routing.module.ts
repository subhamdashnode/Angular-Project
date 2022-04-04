import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { EditComponent } from './components/edit/edit.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  {path:'note',canActivate:[AuthGuard],children:[
    {path:'',component:NoteComponent},
    {path:'addnote',component:AddnoteComponent},
    {path:'edit',component:EditComponent}
  ]},
  {path:"auth",loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
