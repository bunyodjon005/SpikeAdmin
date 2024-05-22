import { Injectable } from '@angular/core';
import { JWTService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private Loggedin = false;
  Jwtapilogin(name: string, password: string): boolean {
    if (this.jwt) {
      this.Loggedin = true;
      return true;
    }
     else {
      return false;
    }
  }
  saveJwt(jwt: string) {
    localStorage.setItem('auth_token', jwt)
  }
  logout(): void {
    this.Loggedin = false;
  }
  isLoggedin(): boolean {
    return this.Loggedin;
  }
  isAdmin(): boolean {
    return this.Loggedin;
  }
  constructor(private jwt: JWTService) { }
}
