import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), // Ahora hay que hacer llamado al modulo
        canActivate: [AdminGuard]
      },
      // El slash del path no es obligatorio, es opcional
      // Por lo general se utiliza sin el slash
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        canActivate: [AdminGuard] // Se le agrega un guardian para proteger la ruta de contact a ciertos usuarios
      },
    ]
  }, // No path redirection
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found-routing.module').then(m => m.PageNotFoundRoutingModule) // 404 Page not found
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // Es una estrategia de precarga de los componentes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
