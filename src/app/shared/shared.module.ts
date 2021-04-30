import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighligthDirective } from './directives/highligth/highligth.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighligthDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  // Es necesario darle el metadata de exports para que así se puedan utilizar los componentes, directivas y pipes que se almancenen en este modulo
  exports: [
    HeaderComponent,
    FooterComponent,
    HighligthDirective,
    ExponentialPipe
  ]
})
export class SharedModule { }
