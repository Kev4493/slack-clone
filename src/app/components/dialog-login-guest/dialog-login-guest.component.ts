import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-login-guest',
  templateUrl: './dialog-login-guest.component.html',
  styleUrls: ['./dialog-login-guest.component.scss']
})
export class DialogLoginGuestComponent {
  constructor(public router: Router) { }

  openUrl() {
    this.router.navigateByUrl('/chat');
  }
}
