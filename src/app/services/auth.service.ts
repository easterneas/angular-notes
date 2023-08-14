import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from 'src/app/models/User';
import { errorHandler } from '../helpers/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = `https://mysecuremovies-1-l3490438.deta.app`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // getter ini akan menentukan apakah akses diperbolehkan atau tidak,
  // melalui sebuah authorization token pada local storage.

  // getter ini akan digunakan pada authentication guard.

  get isAuthenticated() {
    // double-bang (!!) akan mengembalikan nilai truthy/falsy
    // dari sebuah value, beda dari negation (!) yang mengembalikan
    // nilai kebalikannya.
    return !!this.getAuthorizationToken()
  }

  // ambil pseudo-setter dan pseudo-getter untuk app_token

  getAuthorizationToken () {
    return localStorage.getItem('app_token')
  }

  setAuthorizationToken (token: string) {
    return localStorage.setItem('app_token', token)
  }

  // Omit -- sebuah TypeScript syntax di mana kita dapat menghilangkan
  // key-key tertentu yang ada pada sebuah type.
  // Contoh: Omit<Type, 'key'>
  signUp(user: Omit<User, 'id'>): Observable<any>{
    const api = `${this.endpoint}/register`;

    return this.http
    .post(api, user)
    .pipe( catchError(errorHandler) )
  }

  // Bisa juga kita "Omit"-kan lebih dari 1 key, dengan menggunakan
  // operator Union (simbol: |)
  signIn(user: Omit<User, 'id' | 'name'>) {
    const api = `${this.endpoint}/login`;

    return this.http
    .post(api, user)
    .pipe( catchError(errorHandler) )
  }
}
