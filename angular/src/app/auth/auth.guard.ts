import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authservice:AuthService,private _router:Router){ }

  canActivate():boolean{
    if(this._authservice.checkAuthToken()){
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }

}
