import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePlusFive'
})
export class PipePlusFivePipe implements PipeTransform {

  transform(value: number): any {
    return value+5;
  }

}
