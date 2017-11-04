import { Component } from '@angular/core';
import { TimerService } from './timer.service'

@Component({
  selector: 'time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})

export class TimeListComponent {
  constructor(private ts: TimerService) {}

  getList(): any {
    return this.ts.all();
  }

  remove(index) {
    this.ts.remove(index);
  }

  start() {
    this.ts.start();
  }

  stop() {
    this.ts.stop();
  }

  isStarted() {
    return !this.ts.isStopped();
  }

  isEmpty() {
    return this.ts.isEmpty();
  }
}
