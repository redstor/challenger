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
  },
  {
    path: 'topics',
    loadChildren: () => import('./features/topics/topics.module').then(m => m.TopicsModule),
    data: {
      preload: true,
      delay: 150
    }
  },
  {
    path: 'stats',
    loadChildren: () => import('./features/stats/stats.module').then(m => m.StasModule),
    data: {
      preload: true,
      delay: 200
    }
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    data: {
      preload: true,
      delay: 250
    }
  },
];
