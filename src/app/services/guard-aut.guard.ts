import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAutGuard implements CanActivate {

  constructor(
    private service: AuthService,
    private route: Router) { }

  async canActivate(): Promise<any> {
    const token = sessionStorage.getItem('token');
    const user = this.service.getUser();
    if (!token || !user) {
      this.route.navigate(['/home']);
      return false;
    }
    const responseVerify: any = await this.service.isAuthenticated().toPromise()
    return responseVerify.status === true? true:false
  }

}
