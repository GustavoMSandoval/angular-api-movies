import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.scss' ]
})
export class AppComponent {
  constructor(private router: Router ) {}

  RouteValidation(): boolean {
    return this.router.url !== '/';
  }

  
}
