import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapRoutingModule } from './googlemap-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AutosearchComponent } from './components/autosearch/autosearch.component';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";


@NgModule({
  declarations: [
    AutosearchComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    GooglemapRoutingModule,
    MaterialUiModule,
    GoogleMapsModule,
    GooglePlaceModule
  ]
})
export class GooglemapModule { }
