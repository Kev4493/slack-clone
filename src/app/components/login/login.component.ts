import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginGuestComponent } from '../dialog-login-guest/dialog-login-guest.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginGuestComponent);

  }

  onSubmit() {
    return false;
  }
}
