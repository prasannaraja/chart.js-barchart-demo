import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Chart } from 'chart.js';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {
  @Input() label: BehaviorSubject<string[]>;
  @Input() data: BehaviorSubject<number[]>;
  @Input() borderColor: string = '#3cba9f';
  @Input() fill: boolean = true;
  @Input() legendDisplay: boolean = true;
  @Input() xAxesDisplay: boolean = true;
  @Input() yAxesDisplay: boolean = true;

  private backgroundColor = [
    '#3cb371',
    '#0000FF',
    '#9966FF',
    '#4C4CFF',
    '#00FFFF',
    '#f990a7',
    '#aad2ed',
    '#FF00FF',
    'Blue',
    'Red',
    'Blue',
  ];

  ngOnInit(): void {
    const barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.label.value,
        datasets: [
          {
            data: this.data.value,
            borderColor: this.borderColor,
            backgroundColor: this.backgroundColor,
            fill: this.fill,
          },
        ],
      },
      options: {
        legend: {
          display: this.legendDisplay,
        },
        scales: {
          xAxes: [
            {
              display: this.xAxesDisplay,
            },
          ],
          yAxes: [
            {
              display: this.yAxesDisplay,
            },
          ],
        },
      },
    });

    this.data.subscribe((x) => {
      barchart.data.labels = this.label.value;
      barchart.data.datasets = [
        {
          data: x,
          borderColor: this.borderColor,
          backgroundColor: this.backgroundColor,
          fill: this.fill,
        },
      ];
      barchart.update();
    });
  }
}
