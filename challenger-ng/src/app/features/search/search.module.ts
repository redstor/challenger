import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FlexModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    data: {
      breadcrumb: 'search'
    }
  }
];

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), MatIconModule, FlexModule, InfiniteScrollModule, TranslateModule]
})
export class SearchModule {}
