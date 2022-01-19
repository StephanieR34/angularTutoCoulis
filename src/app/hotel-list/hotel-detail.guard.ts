import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
//import { relative } from 'path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
    const id = +route.url[1].path;

    if (isNaN(id) || id <= 0){
      alert('Hotel inconnu');
      //this.router.navigate(['/hotels'] );
      return false;
    }
    return true;
  }

}
