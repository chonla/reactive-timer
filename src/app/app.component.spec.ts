import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimeControllerComponent } from './time-controller.component';
import { TimerComponent } from './timer.component';
import { TimeListComponent } from './time-list.component';
import { TimeSetterComponent } from './time-setter.component';
import { TickPipe } from './tick.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { TimerService } from './timer.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimeControllerComponent,
        TimerComponent,
        TimeListComponent,
        TimeSetterComponent,
        TickPipe
      ],
      providers: [TimerService],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
