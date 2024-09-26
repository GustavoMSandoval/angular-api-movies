import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieDetail } from '../../interfaces/movie-detail';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

const imgUrl = environment.imgURL;
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit{
  private movieService = inject(MovieService)
  movies: MovieDetail[] = [];

  ngOnInit(): void {
      this.loadMovies();
  }
  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (res:any) => {
        this.movies = res.results as MovieDetail[];
        console.log(res.results)
      },
      error:(error) => console.log('Error fetching movies ',error)
    })
  }
  getFullImageUrl(posterPath: String) : String {
    return imgUrl + posterPath;
  }
}
