import { AbstractControl } from "@angular/forms";

// Es una buen práctica que los métodos de esta clase sean estáticos, para asi no tener que crear instancias de la clase cuando se quieran usar.
export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 1000) {
      return { priceInvalid: true }; // Lanza un error
    }
    return null; // No hubo error
  }
}
