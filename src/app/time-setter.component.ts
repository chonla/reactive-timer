import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TimerService } from './timer.service';

@Component({
  selector: 'time-setter',
  templateUrl: './time-setter.component.html',
  styleUrls: ['./time-setter.component.css']
})

export class TimeSetterComponent {
  timeForm: FormGroup;

  constructor(private fb: FormBuilder, private ts: TimerService) {
    this.timeForm = fb.group({
      title: [''],
      minutes: ['', Validators.required]
    });
  }

  add_time(timeForm) {
    this.ts.add(timeForm.value);
  }
}
