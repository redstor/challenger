import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@app/shared/components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      breadcrumb: 'users'
    }
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), MatIconModule, MatCardModule,  FlexModule, MatBadgeModule]
})
export class UsersModule {}
