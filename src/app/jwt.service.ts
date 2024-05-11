import { useAnimation } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTService {
  private jwturl = [{ id: 1, username: "example002", password: "password122", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" }]
  JwtLogin(username: string, password: string): Observable<any> {
    const jwturls = this.jwturl.find(u => u.username === username && u.password === password);
    if (jwturls) {
      return of({ succes: true, token: jwturls.token }).pipe(delay(1000))
    }
    else {
      return of({ succes: false }).pipe(delay(1000))
    }
  }
  JwtRegister(name: string, password: string): Observable<any> {
    return of({ succes: true }).pipe(delay(1000))
  }
  constructor() { }
}
