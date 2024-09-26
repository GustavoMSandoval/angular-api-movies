import { Component } from '@angular/core';
import { MovieComponent } from "../../components/movie/movie.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
