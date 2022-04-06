import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbourdRoutingModule } from './dashbourd-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { NgChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { PiechatComponent } from './components/piechat/piechat.component';
import { Linechart2Component } from './components/linechart2/linechart2.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    SidenavComponent,
    LinechartComponent,
    PiechatComponent,
    Linechart2Component,
    DoughnutChartComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    DashbourdRoutingModule,
    MaterialUiModule,
    NgChartsModule,
    Ng2GoogleChartsModule,
    MatProgressBarModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class DashbourdModule { }
