import { Routes } from '@angular/router';
import { Contatti } from './contatti/contatti';
import { AppComponent } from './app.component';
import { Home } from './home/home';
import { Blog } from './blog/blog';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'contatti', component: Contatti},
    {path:'blog', component: Blog}
];
