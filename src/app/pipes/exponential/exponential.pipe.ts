import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // Método que ayuda a la tranformación de un PIPE propio
  transform(value: number): number {
    return Math.pow(value, 2); // Valor evelado a la 2
  }

}
