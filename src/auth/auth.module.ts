import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { UserContextGuard } from './user-context.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthComponent],
  providers: [UserContextGuard],
  exports: [AuthComponent],
})
export class AuthModule {}
