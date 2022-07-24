import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/collections', pathMatch: 'full' },
  { path: 'collections', loadChildren: () => import('./features/collections/collections.module').then(m => m.CollectionsModule)  },
  { path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)  },
  { path: 'topics', loadChildren: () => import('./features/topics/topics.module').then(m => m.TopicsModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
