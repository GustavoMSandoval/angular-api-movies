import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetail } from '../interfaces/movie-detail';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient)

  constructor() { }

  getMovies() : Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${apiUrl}discover/movie?api_key=${apiKey}`)
  }

  getMovie(movieId:string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${apiUrl}movie/${movieId}?api_key=${apiKey}`)
  }
}
