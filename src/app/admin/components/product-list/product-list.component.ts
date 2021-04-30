import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id)
      .subscribe((resp) => {
        (resp) ? this.fetchProducts() : console.log(resp);
      });
  }

}
