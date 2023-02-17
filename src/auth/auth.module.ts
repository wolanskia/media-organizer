import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { UserContextGuard } from './user-context.guard';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AuthComponent],
  providers: [UserContextGuard],
  exports: [AuthComponent],
})
export class AuthModule {}
