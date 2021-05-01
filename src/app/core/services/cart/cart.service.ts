import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Array donde se van a almacenar los productos en el carrito
  private products: Product[] = [];
  // Permite el control de flujo de datos
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable(); // Se crea un observable al cual se van a poder suscribir las clases

  constructor() { }

  addCart(product: Product) {
    // De esta manera no se altera el arreglo sino que se crea uno nuevo en la misma variable que posea los valores de el mismo más el valor que le llegó
    this.products = [...this.products, product];
    // De esta manera se va a notificar de los cambios que haya a cada una de las clases que esten suscritas al carrito
    this.cart.next(this.products);
  }
}
