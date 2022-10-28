import { UserDetailComponent } from './../user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  },
  {
    path: ':id/detail',


    loadChildren: () => import('../user-data/user-data.module').then(m => m.UserDataPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule { }
