import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuIsOpen = false;
  toggleMenu() {
    this.menuIsOpen = true;
    console.log();
  }
}
