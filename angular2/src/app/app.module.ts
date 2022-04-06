import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { GooglemapModule } from './googlemap/googlemap.module';
import { FormModule } from './form/form.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashbourdModule } from './dashbourd/dashbourd.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    GooglemapModule,
    FormModule,
    DashbourdModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
