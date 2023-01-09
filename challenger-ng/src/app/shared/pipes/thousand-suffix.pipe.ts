import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'thousandSuffixPipe'
})
export class ThousandSuffixPipe implements PipeTransform {

  transform(value: number, args: number | undefined): any {
  
    let suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
    
    if (Number.isNaN(value)) {
      return null;
    }

    if(value < 1000 && value >= 100){
      return "99+"
    }

    if (value < 1000) {
      return value;
    }

    let exp = Math.floor(Math.log(value) / Math.log(1000));

    return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];

  }

}
