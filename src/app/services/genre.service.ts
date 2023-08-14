import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { errorHandler } from '../helpers/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  endpoint: string = `https://mysecuremovies-1-l3490438.deta.app/genres`

  constructor(
    private http: HttpClient
  ) { }

  getGenres (): Observable<any> {
    const api = `${this.endpoint}`

    return this.http.get(api)
    .pipe( catchError(errorHandler) )
  }
}
