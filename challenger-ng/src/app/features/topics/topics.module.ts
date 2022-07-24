import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FlexModule } from '@angular/flex-layout';
import { TopicsComponent } from './components/topics/topics.component';

const route: Routes = [
  { path: '', component: TopicsComponent },
];

@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ComponentsModule,
    FlexModule
  ]
})
export class TopicsModule { }
