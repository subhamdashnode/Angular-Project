import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapRoutingModule } from './googlemap-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AutosearchComponent } from './components/autosearch/autosearch.component';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [
    AutosearchComponent,
    MapComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    GooglemapRoutingModule,
    MaterialUiModule,
    GoogleMapsModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GooglemapModule { }
