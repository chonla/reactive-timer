import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tick' })
export class TickPipe implements PipeTransform {
  transform(value: number): string {
    const m = Math.floor(value / 60);
    let s = (value % 60).toString();
    if (s.length === 1) {
      s = '0' + s;
    }
    return m + ':' + s;
  }
}
