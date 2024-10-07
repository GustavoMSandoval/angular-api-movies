import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MovieDetail } from '../../interfaces/movie-detail';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';


const imgUrl = environment.imgURL;

@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [],
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.scss'
})

export class MovieViewComponent implements OnInit {
  private movieService = inject(MovieService)
  movie: MovieDetail | undefined;
  movieId: any;
  title: string = '';

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(
      res => {
        this.movieId = res["id"]
      }

    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res, "objeto")
    )

    this.activeRoute.firstChild?.params.subscribe()
  }

 

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( (params) => {
    
          this.movieId = params.get('id');
          if(this.movieId) {
            this.loadMovie();
          } else {
            console.log("Error loadMovie")
          }
    })

    
  };
  

  loadMovie() {
    this.movieService.getMovie(this.movieId).subscribe({
      next: (res:any) => {
        this.movie = res as MovieDetail;

        console.log(res, "Api response");
        
        if(res.results && Array.isArray(res.results)) {
          
          this.movie = {
            id: res.id,
            poster_path: res.poster_path,
            title: res.title,
            overview: res.overview,
            vote_average: res.vote_average,
            release_date: res.release_date
          } as MovieDetail;
          
          console.log(this.movie, "updated array")
        } else {
          console.error("Results not found in response")
        }
        
      },
      error:(error) => console.log('Error fetching movies ',error)
    })
  }

  getFullImageUrl(posterPath: String| undefined) : String {
    return imgUrl + posterPath;
  }

}

