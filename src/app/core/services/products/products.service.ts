import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://platzi-store.herokuapp.com/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    // De esta manera se le dice a angular el tipo de dato que va a resovler el método GET
    return this.http.get<Product[]>(this.URL);
  }

  getProduct(id: string) {
    return this.http.get(`${this.URL}/${id}`);
  }
}
