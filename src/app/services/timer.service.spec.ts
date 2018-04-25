import { TestBed, inject } from '@angular/core/testing';

import { TimerService } from './timer.service';
import { Time } from '../models/time';

describe('TimerService', () => {

  var service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    });

    service = TestBed.get(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('item list', () => {
    it('should return 1 when add a new item', () => {
      service.add({
        name: "Test",
        duration: 20,
        elapsed: 0
      });

      var result = service.count();
      expect(result).toBe(1);
    });

    it('should empty list when clear list', () => {
      service.add({
        name: "Test",
        duration: 20,
        elapsed: 0
      });
      service.clear();

      var result = service.count();
      expect(result).toBe(0);
    });
  });
});
