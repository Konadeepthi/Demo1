import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  registerUser(user): Observable<any> {
    return this.http.post('http://localhost:8080/users/register', user);
  }
  loginUser(user): Observable<any> {
    return this.http.post('http://localhost:8080/users/login', user);
  }
}
