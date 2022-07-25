import { Routes } from '@angular/router';

export const challengerRoutes: Routes = [
  { path: '', redirectTo: '/collections', pathMatch: 'full' },
  {
    path: 'collections',
    loadChildren: () => import('./features/collections/collections.module').then(m => m.CollectionsModule),
    data: {
      preload: true,
      delay: 50
    }
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule),
    data: {
      preload: true,
      delay: 100
    }
  }
];
