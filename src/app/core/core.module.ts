import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { AuthService } from './services/auth/auth.service';
import { CartService } from './services/cart/cart.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    AuthService,
    CartService
  ]
})
export class CoreModule { }
