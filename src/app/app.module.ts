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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    DoughnutComponent,
    PiechartComponent,
    PolarareaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BarChartModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
