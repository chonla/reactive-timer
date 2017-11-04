import { Component } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {
  constructor(private ts: TimerService) {}

  getTick() {
    return this.ts.current();
  }
}
