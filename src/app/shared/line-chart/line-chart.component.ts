import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() labels = new BehaviorSubject<string[]>([]);
  @Input() data = new BehaviorSubject<number[]>([]);
  @Input() displayLegend: boolean = false;
  @Input() displayxAxes: boolean = true;
  @Input() displayyAxes: boolean = true;
  public Linechart:any = [];

  ngOnInit(): void {
    this.Linechart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.labels.value,

        datasets: [
          {
            data: this.data.value,
            borderColor: '#3cb371',
            backgroundColor: '#0000FF',
          },
        ],
      },
      options: {
        legend: {
          display: this.displayLegend,
        },
        scales: {
          xAxes: [
            {
              display: this.displayxAxes,
            },
          ],
          yAxes: [
            {
              display: this.displayyAxes,
            },
          ],
        },
      },
    });

    this.data.subscribe((x) => {
      this.Linechart.data = {
        labels: this.labels.value,
        datasets: [
          {
            data: this.data.value,
            borderColor: '#3cb371',
            backgroundColor: '#0000FF',
          },
        ],
      };
      this.Linechart.update();
    });
  }
}
