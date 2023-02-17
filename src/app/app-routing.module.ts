import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/auth/auth.component';
import { UserContextGuard } from 'src/auth/user-context.guard';
import { ListComponent } from 'src/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'collections',
  },
  {
    path: 'collections',
    component: ListComponent,
    canActivate: [UserContextGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
