import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosearchComponent } from './components/autosearch/autosearch.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {path:'',component:AutosearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglemapRoutingModule { }
