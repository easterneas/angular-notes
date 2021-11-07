import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errorHandler } from '../helpers/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  endpoint: string = `https://fsd-h8-ocbc-my-movies.herokuapp.com/studios`

  constructor(
    private http: HttpClient
  ) { }

  getStudios (): Observable<any> {
    const api = `${this.endpoint}`

    return this.http.get(api)
    .pipe( catchError(errorHandler) )
  }
}
