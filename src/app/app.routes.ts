import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'contatti',
    loadComponent: () => import('./contatti/contatti').then((m) => m.Contatti),
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog').then((m) => m.Blog),
  },
];
