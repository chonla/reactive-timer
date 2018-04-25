import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private ticker: TimerService) { }

  ngOnInit() {
  }

  start() {
    this.ticker.start();
  }

  stop() {
    this.ticker.stop();
  }

}
