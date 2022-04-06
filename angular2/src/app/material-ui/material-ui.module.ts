import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

const materialUIcomponent:any=[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [
    materialUIcomponent
  ],exports:[
    materialUIcomponent
  ]
})
export class MaterialUiModule { }
