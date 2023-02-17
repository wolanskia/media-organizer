import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/auth/auth.component';
import { UserContextGuard } from 'src/auth/user-context.guard';
import { ListComponent } from 'src/list/list.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    component: ListComponent,
    canActivate: [UserContextGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
