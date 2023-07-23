import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'home',
    loadComponent: () => import('./home.component'),
  },
  {
    path: 'login',
    loadComponent: () => import('./login.component'),
  }
];
