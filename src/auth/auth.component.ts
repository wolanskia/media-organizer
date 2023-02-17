import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionService } from './session.service';

@Component({
  selector: 'auth',
  template: ``,
})
export class AuthComponent {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sessionService.authCode = params['code'];
    });
  }
}
