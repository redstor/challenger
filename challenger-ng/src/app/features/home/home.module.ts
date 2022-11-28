import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'home'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, MatButtonModule, RouterModule.forChild(routes)]
})
export class HomeModule {}
