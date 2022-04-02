import { NgModule } from '@angular/core';
import { MaterialUiRoutingModule } from './material-ui-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const materialUiModule:any=[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
]




@NgModule({
  declarations: [],
  imports: [
    MaterialUiRoutingModule,
    materialUiModule
  ],exports:[
    materialUiModule
  ]
})
export class MaterialUiModule { }
