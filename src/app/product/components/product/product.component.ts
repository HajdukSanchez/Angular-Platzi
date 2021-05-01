import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // Componente que va a recibir alguna propiedad desde otro componente
  @Input() product: Product | any;
  // Componente que va a enviar un evento a otro componente al momento que suceda algo;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }

}
