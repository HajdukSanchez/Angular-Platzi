import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Variable de ambiente
  private URL = `${environment.urlAPI}/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    // De esta manera se le dice a angular el tipo de dato que va a resovler el método GET
    return this.http.get<Product[]>(`${this.URL}`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.URL, product);
  }

  // Con el Partial le decimos que vamo a enviarle una parte del objeto que vamos a actualizar de donde obtenemos la información.
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${this.URL}/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
