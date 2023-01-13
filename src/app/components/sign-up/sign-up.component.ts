import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginGuestComponent } from '../dialog-login-guest/dialog-login-guest.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginGuestComponent);

  }

  onSubmit() {
    return false;
  }
}
