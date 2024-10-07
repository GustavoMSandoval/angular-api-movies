import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieDetail } from '../../interfaces/movie-detail';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

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
  starSvg: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.starSvg = this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF55">
        <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Zm247-369Z"/>
      </svg>
    `);}

  ngOnInit(): void {
      this.loadMovies();
  }
  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (res:any) => {
        this.movies = res.results as MovieDetail[];
        //console.log(res.results)
      },
      error:(error) => console.log('Error fetching movies ',error)
    })
  }
  getFullImageUrl(posterPath: String) : String {
    return imgUrl + posterPath;
  }
}
