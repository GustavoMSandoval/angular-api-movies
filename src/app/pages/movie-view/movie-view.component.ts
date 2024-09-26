import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';


const imgUrl = environment.imgURL;

@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [],
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.scss'
})
export class MovieViewComponent implements OnInit {
  movieID: any;
  moviePoster:      string = '';
  movieTitle:       string = '';
  movieDescription: string = '';


  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(
      res => {
        this.movieTitle = res["title"]
      }

    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe()
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( (params) => {

      this.movieID = params.get('id');
      this.moviePoster = params.get('poster') || '';
      this.movieTitle = params.get('title') || '';
      this.movieDescription = params.get('overview') || '';

    }
    )
    
  };
  
  getFullImageUrl(posterPath: String) : String {
    return imgUrl + posterPath;
  }

}

