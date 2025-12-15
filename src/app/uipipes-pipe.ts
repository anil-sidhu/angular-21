import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uIPipes',
})
export class UIPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
