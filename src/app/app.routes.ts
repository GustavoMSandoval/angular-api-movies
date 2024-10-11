import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';
import { FormViewComponent } from './pages/form-view/form-view.component';

export const routes: Routes = [
    {
        path:'', 
        component: FormViewComponent
    },
    {
        path:'movies',
        component: HomeComponent
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
