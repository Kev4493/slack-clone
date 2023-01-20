import { Component } from '@angular/core';
import { GuestLoginService } from 'src/app/services/guest-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName: string;

  constructor(public guestUser: GuestLoginService) {
    this.checkGuestUserisLogin();
  }

  checkGuestUserisLogin() {
    if (this.guestUser.displayName) {
      this.userName = this.guestUser.displayName;
    } else {
      this.userName = 'Jahleel';
    }
  }

  menuIsOpen = false;
  toggleMenu() {
    this.menuIsOpen = true;
    console.log();
  }
}
