import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { TimerService } from './services/timer.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DisplayComponent
      ],
      providers: [
        TimerService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
