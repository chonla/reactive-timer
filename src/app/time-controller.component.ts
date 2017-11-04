import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'time-controller',
  templateUrl: './time-controller.component.html',
  styleUrls: ['./time-controller.component.css']
})

export class TimeControllerComponent {
  toggle() {
    $('#sidebar').toggleClass('active');
  }
}
