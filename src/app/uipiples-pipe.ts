import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uIPiples',
})
export class UIPiplesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
