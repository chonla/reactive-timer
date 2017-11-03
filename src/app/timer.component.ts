import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit, OnDestroy {

  private timerHandler;
  private tick;

  ngOnInit() {
    this.tick = 0;
    this._startTimer();
  }

  ngOnDestroy() {
    this._clearTimer();
  }

  getTick() {
    return this.tick;
  }

  private _startTimer() {
    this.timerHandler = setTimeout(() => {
      this.tick++;
      this._startTimer();
    }, 1000);
  }

  private _clearTimer() {
    if (this.timerHandler) {
      clearTimeout(this.timerHandler);
    }
  }

}
