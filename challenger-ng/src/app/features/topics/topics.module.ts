import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicComponent } from './components/topic/topic.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FlexModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    data: {
      breadcrumb: 'topics'
    }
  },
  {
    path: 'topic/:topicId',
    component: TopicComponent,
    data: {
      breadcrumb: 'topic'
    }
  }
];

@NgModule({
  declarations: [TopicsComponent, TopicComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), MatIconModule, FlexModule, InfiniteScrollModule, TranslateModule]
})
export class TopicsModule {}
