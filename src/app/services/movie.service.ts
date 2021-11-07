import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { errorHandler } from '../helpers/errorHandler';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  endpoint: string = `https://fsd-h8-ocbc-my-movies.herokuapp.com/movies`

  constructor(
    private http: HttpClient
  ) { }

  getMovies (): Observable<any> {
    return (
      this.http
      .get(this.endpoint)
      .pipe( catchError(errorHandler) )
    )
  }

  getOneMovie (id: number): Observable<any> {
    return (
      this.http
      .get(this.endpoint, { params: { id } })
      .pipe( catchError(errorHandler) )
    )
  }

  addNewMovie(movie: Movie): Observable<any> {
    return (
      this.http
      .post(this.endpoint, movie)
      .pipe( catchError(errorHandler) )
    )
  }

  updateMovie(movie: Movie): Observable<any> {
    const { id } = movie

    delete movie.id

    return (
      this.http
      .put(`${this.endpoint}/${id}`, movie)
      .pipe( catchError(errorHandler) )
    )
  }

  deleteMovie(id: number): Observable<any> {
    return (
      this.http
      .delete(`${this.endpoint}/${id}`)
      .pipe( catchError(errorHandler) )
    )
  }
}
