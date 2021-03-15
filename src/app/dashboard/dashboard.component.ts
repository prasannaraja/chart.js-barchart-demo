import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { BehaviorSubject, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lable = new BehaviorSubject<string[]>([]);
  public data = new BehaviorSubject<number[]>([]);
  private source = timer(1000, 5000);

  ngOnInit(): void {
    this.GetData();
    this.refreshBarChart();
  }

  private GetData() {
   this.lable.next(['a', 'b', 'c', 'd']);
   this.data.next([
     this.getRandomInt(45),
     this.getRandomInt(65),
     this.getRandomInt(55),
     this.getRandomInt(75),
   ]);
  }

  private refreshBarChart()
  {
    this.source.subscribe((x) => {
      this.GetData();
    });
}

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
