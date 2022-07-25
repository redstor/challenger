import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './components/topics/topics.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FlexModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    data: {
      breadcrumb: 'topics'
    }
  }
];

@NgModule({
  declarations: [TopicsComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), MatIconModule, FlexModule, InfiniteScrollModule]
})
export class TopicsModule {}
