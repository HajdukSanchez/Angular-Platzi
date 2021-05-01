import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // Es parecido a un servicio, a diferencia que tiene un método preestablecido
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Acá se evalua si hay un usuario autenticado en la aplicación y si no lo hay no se le permite el paso
    return this.authService.hasUser().pipe(
      map(user => user === null ? false : true),
      // El tap nos deja realizar acciones u obtener valores de un PIPE sin tranformar los datos que allí hay
      tap(hasUser => {
        if (!hasUser) {
          this.router.navigate(['./auth/login']); // Si no hay usuario, va a redireccionar al home
        }
      })
    );
  }

}
