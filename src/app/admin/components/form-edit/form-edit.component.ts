import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {

  form: FormGroup | any;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private ActivedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.ActivedRoute.params
      .subscribe((params: Params) => {
        this.id = params.id;
        this.productsService.getProduct(this.id)
          .subscribe((product) => {
            this.form.patchValue(product); // Se insertan los datos que llegan al formulario de actualización
          });
      });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  updateProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.updateProduct(this.id, this.form.value)
        .subscribe((newProduct) => {
          this.router.navigate(['./admin/products']);
        });
    }
  }

  get priceFields() {
    return this.form.get('price');
  }
}
