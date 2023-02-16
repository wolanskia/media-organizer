import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthComponent, SafePipe],
  exports: [AuthComponent, SafePipe],
})
export class AuthModule {}
