import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';

export const routes: Routes = [
    {
        path:'', 
        component:HomeComponent
    },
    {
        path:'movie/:id',
        component:MovieViewComponent
    },
    {
        path: '**', 
        redirectTo: '' 
    }
];
