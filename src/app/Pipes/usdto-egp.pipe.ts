import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})

export class USDtoEGPPipe implements PipeTransform {

  transform(val : number , rate : number = 18): number {
    return val*rate;
  }

}
