import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public lable = new BehaviorSubject<string[]>([]);
  public data = new BehaviorSubject<number[]>([]);
  public enableRefresh = new BehaviorSubject<boolean>(false);
  private source = timer(1000, 5000);
  private subscriptions: Subscription = new Subscription();
  private timerSubscription: Subscription;

  ngOnInit(): void {
    this.subscriptions.add(
      this.enableRefresh.subscribe((enabled) => {
        if (enabled) {
          this.timerSubscription = new Subscription();
          this.timerSubscription.add(
            this.source.subscribe((x) => {
              this.GetData();
            })
          );
        } else {
          this.timerSubscription?.unsubscribe();
        }
        console.log('refresh:', enabled);
      })
    );
  }

  private GetData() {
    this.data.next([
      this.getRandomInt(45),
      this.getRandomInt(65),
      this.getRandomInt(55),
      this.getRandomInt(75),
    ]);
    this.lable.next(['a', 'b', 'c', 'd']);
    console.log(this.data.value);
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public toggle(): void {
    this.enableRefresh.next(!this.enableRefresh.value);
  }

  ngOnDestroy(): void {
    console.log('subscriptions:', this.timerSubscription);
    this.subscriptions.unsubscribe()
  }
}
