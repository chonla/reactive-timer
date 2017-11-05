import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';
import { TimeControllerComponent } from './time-controller.component';
import { TimeSetterComponent } from './time-setter.component';
import { TimeListComponent } from './time-list.component';
import { TimerService } from './timer.service';
import { TickPipe } from './tick.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimeControllerComponent,
    TimeSetterComponent,
    TimeListComponent,
    TickPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
