import { Injectable } from '@angular/core';

const TimerState = {
  'STOPPED': 0,
  'STARTED': 1
};

@Injectable()
export class TimerService {
  private timeSeries = [];
  private state = TimerState.STOPPED;
  private timerHandler;
  private tick;
  private ptr = 0;

  add(t) {
    const c = JSON.parse(JSON.stringify(t));
    c.active = false;
    c.seconds = c.minutes * 60;
    this.timeSeries.push(c);
  }

  remove(i) {
    this.timeSeries = this.timeSeries.filter((v, n) => {
      return i !== n;
    });
  }

  all() {
    return this.timeSeries;
  }

  pop() {
    if (this.timeSeries.length === 0) {
      return undefined;
    }
    this.timeSeries.map((o) => o.active = false);
    this.timeSeries[this.ptr].active = true;
    this.timeSeries[this.ptr].seconds = this.timeSeries[this.ptr].minutes * 60;
    const t = this.timeSeries[this.ptr];
    this.ptr = (this.ptr + 1) % this.timeSeries.length;
    return t;
  }

  start() {
    this.state = TimerState.STARTED;
    this.tick = this.pop();
    this._startTimer();
  }

  stop() {
    this.state = TimerState.STOPPED;
    this._clearTimer();
    this.ptr = 0;
    this.timeSeries.map((o) => o.active = false);
  }

  isStopped(): boolean {
    return (this.state === TimerState.STOPPED);
  }

  isEmpty(): boolean {
    return this.timeSeries.length === 0;
  }

  current(): any {
    if (this.state === TimerState.STOPPED) {
      return {
        title: '',
        seconds: 0
      };
    }
    return this.tick;
  }

  private _startTimer() {
    if (this.timeSeries.length === 0) {
      return;
    }
    this.timerHandler = setTimeout(() => {
      this.tick.seconds--;
      if (this.tick.seconds <= 0) {
        this.tick = this.pop();

        if (typeof(this.tick) === 'undefined') {
          this.stop();
          return;
        }
      }
      this._startTimer();
    }, 1000);
  }

  private _clearTimer() {
    if (this.timerHandler) {
      clearTimeout(this.timerHandler);
    }
  }

}
