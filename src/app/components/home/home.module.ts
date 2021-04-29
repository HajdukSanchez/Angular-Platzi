import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule, // Es necesario incluir este modulo para que Angular reconozca las directivas NGIF, NGFOR, etc.
    HomeRoutingModule // Es necesario siempre importar el Routing module asociado a a este modulo
  ]
})
export class HomeModule { }
