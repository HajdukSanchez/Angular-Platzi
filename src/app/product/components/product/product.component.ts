import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    // console.log('added to cart');
    this.productClicked.emit(this.product.id);
  }

}
