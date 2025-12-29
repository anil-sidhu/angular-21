import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {

    if (args.length) {
      return value * args[0]
    } else {
      return value * 90;
    }

  }

}
