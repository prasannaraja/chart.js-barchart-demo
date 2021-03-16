import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartModule } from './shared/bar-chart/bar-chart.module';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { DoughnutComponent } from './shared/doughnut/doughnut.component';
import { PiechartComponent } from './shared/piechart/piechart.component';
import { PolarareaComponent } from './shared/polararea/polararea.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    DoughnutComponent,
    PiechartComponent,
    PolarareaComponent
  ],
  imports: [
    BrowserModule,
    BarChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
