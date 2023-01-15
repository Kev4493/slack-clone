import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { GuestLoginService } from 'src/app/services/guest-login.service';

@Component({
  selector: 'app-dialog-login-guest',
  templateUrl: './dialog-login-guest.component.html',
  styleUrls: ['./dialog-login-guest.component.scss']
})
export class DialogLoginGuestComponent {
  displayName: string;

  constructor(private router: Router, public dialogRef: MatDialogRef<SignUpComponent>, public guestUser: GuestLoginService) { }

  openUrl() {
    console.log('Guest name is: ', this.displayName);
    this.guestUser.displayName = this.displayName;
    this.router.navigate(['/chat']);
    this.dialogRef.close();
  }
}
