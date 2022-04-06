import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./form/form.module').then(m=>m.FormModule)},
  {path:'location',loadChildren:()=>import('./googlemap/googlemap.module').then(m=>m.GooglemapModule)},
  {path:'dashbourd',loadChildren:()=>import('./dashbourd/dashbourd.module').then(m=>m.DashbourdModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
