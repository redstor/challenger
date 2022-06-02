import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/collections', pathMatch: 'full' },
  { path: 'collections', loadChildren: () => import('./features/collections/collections.module').then(m => m.CollectionsModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
