import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, limit: number = 10, dots: string = '...'): string {
    if (!value) return '';

    if (value.length > limit) {
      return value.substring(0, limit) + dots;
    }

    return value;
  }

}
