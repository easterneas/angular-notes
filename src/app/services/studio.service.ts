import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errorHandler } from '../helpers/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  endpoint: string = `https://mysecuremovies-1-l3490438.deta.app/studios`

  constructor(
    private http: HttpClient
  ) { }

  getStudios (): Observable<any> {
    const api = `${this.endpoint}`

    return this.http.get(api)
    .pipe( catchError(errorHandler) )
  }
}
