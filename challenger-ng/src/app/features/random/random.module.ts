import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from './components/random/random.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FlexModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent,
    data: {
      breadcrumb: 'random'
    }
  }
];

@NgModule({
  declarations: [RandomComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), MatIconModule, FlexModule, MatButtonModule]
})
export class RandomModule {}