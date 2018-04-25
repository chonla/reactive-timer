import { Injectable } from '@angular/core';
import { Time } from '../models/time';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { timer } from 'rxjs/observable/timer';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TimerService {

  private time_list: Time[];
  private cursor: number;
  private source: BehaviorSubject<Time>;
  private timeSubscription$: Subscription;

  constructor() {
    this.source = new BehaviorSubject<Time>(new Time());
    this.clear();
  }

  add(item: Time) {
    this.time_list.push(item);
  }

  clear() {
    this.time_list = [];
    this.cursor = 0;
  }

  count(): number {
    return this.time_list.length;
  }

  timeTicked() {
    console.log('ticked!');
  }

  start() {
    const timeSource = timer(1000, 1000);
    this.timeSubscription$ = timeSource.subscribe(v => {
      this.timeTicked();
    });
  }

  stop() {
    this.timeSubscription$.unsubscribe();
  }

  pause() {

  }

  timeChanges(): Observable<Time> {
    return this.source.asObservable();
  }

}
