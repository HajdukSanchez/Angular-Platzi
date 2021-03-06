import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product | any = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe((product) => {
        this.product = product;
      });
  }

  updateProduct(id: string) {
    this.productsService.updateProduct(id, {})
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe((product) => {
        console.log(product);
      });
  }

}
