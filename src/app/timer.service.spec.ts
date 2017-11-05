import { TestBed, async } from '@angular/core/testing';
import { TimerService } from './timer.service';

describe('Timer Service', () => {
  let ts: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    }).compileComponents();

    ts = TestBed.get(TimerService);
  }));

  it('should be empty when initialize service', () => {
    const result = ts.all();
    expect(result).toEqual([]);
  });

  it('should append new time serie with additional information', () => {
    ts.add({
      'title': 'Hello',
      'minutes': 1
    });
    ts.add({
      'title': 'World',
      'minutes': 10
    });
    const result = ts.all();
    expect(result).toEqual([{
      'title': 'Hello',
      'minutes': 1,
      'seconds': 60,
      'active': false
    }, {
      'title': 'World',
      'minutes': 10,
      'seconds': 600,
      'active': false
    }]);
  });

  it('should remove the ith item from time series', () => {
    ts.add({
      'title': 'Hello',
      'minutes': 1
    });
    ts.add({
      'title': 'World',
      'minutes': 10
    });
    const result = ts.remove(0);
    const list = ts.all();
    expect(list).toEqual([{
      'title': 'World',
      'minutes': 10,
      'seconds': 600,
      'active': false
    }]);
  });
});
