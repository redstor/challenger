import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const challengerRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
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
  { path: '', component: PageNotFoundComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
