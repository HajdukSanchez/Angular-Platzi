import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup | any;
  imageURL$?: Observable<any>;

  constructor(
    // El form builder sirve para crear componentes de un formaulario desde la clase con sus validaciones y demas
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      // El primer parámetro es el valor por defecto que queremos posea nuestro campo y luego un array con las validaciones que le vamos a realizar al mismo
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    // El preventDefault se agrega porque los formularios en HTML por defecto intentan hacer el envio de la información del form y recargar la página
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.createProduct(this.form.value)
        .subscribe((newProduct) => {
          // Es posible que una vez se cree nuestro producto, se envie a nuestro inventario que ya tengamos mediante el router
          this.router.navigate(['./admin/products']);
        });
    }
  }

  get priceFields() {
    return this.form.get('price');
  }

  uploadFile(event: Event | any) {
    const file = event.target.files[0]; // Se obtiene el archivo
    const name = 'images'; // Se indica el nombre del archivo
    const fileRef = this.storage.ref(name) // Se saca una referencia del archivo que se va a almacenar
    const task = this.storage.upload(name, file); // Se pide que suba el archivo con su respectivo nombre

    // Esto nos va a permitir saber cuando suba el archivo o si no fue posible
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.imageURL$ = fileRef.getDownloadURL(); // Nos muestra la URL donde quedó almacenada
          this.imageURL$.subscribe((url: string) => {
            this.form.get('image').setValue(url);
          })
        })
      )
      .subscribe();
  }
}
