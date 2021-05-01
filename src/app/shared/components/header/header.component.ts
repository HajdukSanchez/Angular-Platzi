import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalProducts$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.totalProducts$ = this.cartService.cart$
      .pipe(
        // De esta manera TS transforma un flujo de entrada en un valor que querramos
        map(product => product.length)
      );
  }

  ngOnInit(): void {
  }
}
