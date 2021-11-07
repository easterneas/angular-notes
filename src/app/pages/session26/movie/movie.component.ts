import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Genre } from 'src/app/models/Genre';
import { Movie } from 'src/app/models/Movie';
import { Studio } from 'src/app/models/Studio';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';
import { StudioService } from 'src/app/services/studio.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  studios: Studio[] = []
  movies: Movie[] = []
  genres: Genre[] = []

  form = {
    state: 'Add',
    inputData: new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [ Validators.required ]),
      GenreId: new FormControl(0, [ Validators.required ]),
      StudioId: new FormControl(0, [ Validators.required ]),
      yearReleased: new FormControl('', [ Validators.required ]),
    }),
  }

  constructor(
   private movie: MovieService,
   private studio: StudioService,
   private genre: GenreService,
  ) { }

  get id () { return this.form.inputData.get('id') }
  get name () { return this.form.inputData.get('name') }
  get GenreId () { return this.form.inputData.get('GenreId') }
  get StudioId () { return this.form.inputData.get('StudioId') }
  get yearReleased () { return this.form.inputData.get('yearReleased') }

  ngOnInit(): void {
    this.getMovies()
    this.genre
    .getGenres()
    .subscribe(data => {
      this.genres = data
    })
    this.studio
    .getStudios()
    .subscribe(data => this.studios = data)
  }

  getMovies () {
    this.movie
    .getMovies()
    .subscribe(data => {
      this.movies = data
    })
  }

  // Function ini akan memeriksa state dari sebuah form.
  // Jika state bernilai 'Add', maka this.addNewMovie() akan dijalankan.
  // Jika state bernilai 'Edit', maka this.updateMovie() yang dijalankan.
  onSubmit () {
    switch(this.form.state){
      case 'Add':
        return this.addNewMovie()
      case 'Edit':
        return this.updateMovie()
      default:
        // Error ini akan dijalankan jika nilai state di luar kedua
        // case di atas.
        throw 'Error: invalid form state.'
    }
  }

  addNewMovie () {
    const movieData = this.form.inputData.value
    delete movieData.id

    this.movie
    .addNewMovie(movieData)
    .subscribe(_ => {
      this.getMovies()
      this.form.inputData.reset()
    })
  }

  /**
   * editMovie hanya akan menampilkan form.
   */
  editMovie (row: Movie) {
    this.id?.setValue(row.id)
    this.name?.setValue(row.name)
    this.StudioId?.setValue(row.StudioId)
    this.GenreId?.setValue(row.GenreId)
    this.yearReleased?.setValue(row.yearReleased)
    this.form.state = 'Edit'
  }

  /**
   * updateMovie tidak akan menampilkan form, melainkan
   * akan mengirimkan inputData ke dalam server.
   */
  updateMovie () {
    const movieData = this.form.inputData.value

    this.movie
    .updateMovie(movieData)
    .subscribe(_ => {
      this.getMovies()
      this.form.inputData.reset()
      this.form.state = 'Add'
    })
  }

  confirmDelete(id: number) {
    if(confirm(`Are you sure you want to delete Movie ID ${id}?`))
      this.deleteMovie(id)
  }

  deleteMovie (id: number) {
    this.movie
    .deleteMovie(id)
    .subscribe(_ => this.getMovies())
  }

}
