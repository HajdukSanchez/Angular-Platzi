import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) // Ahora hay que hacer llamado al modulo
      },
      // El slash del path no es obligatorio, es opcional
      // Por lo general se utiliza sin el slash
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path:
        'products/:id',
        component: ProductDetailComponent // Acá se le envía un parámeyro dinámico
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AdminGuard] // Se le agrega un guardian para proteger la ruta de contact a ciertos usuarios
      },
    ]
  }, // No path redirection
  { path: 'demo', component: DemoComponent },
  { path: '**', component: PageNotFoundComponent }, // 404 Page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // Es una estrategia de precarga de los componentes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
