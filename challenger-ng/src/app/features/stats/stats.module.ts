import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@app/shared/components/components.module';
import { StatsComponent } from './components/stats/stats.component';
import { StatViewComponent } from './components/stat-view/stat-view.component';
import { FlexModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: StatsComponent,
    data: {
      breadcrumb: 'stats'
    }
  }
];

@NgModule({
  declarations: [StatsComponent, StatViewComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), FlexModule]
})
export class StasModule {}
