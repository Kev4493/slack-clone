import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/compat/auth';
/* import { AngularFireAuth } from "@angular/fire/auth"; */
import { Router } from '@angular/router';
import { DialogLoginGuestComponent } from '../../dialogs/dialog-login-guest/dialog-login-guest.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('passwordField') messageField!: ElementRef;
  signForm!: FormGroup;

  constructor(public dialog: MatDialog, private router: Router, private afAuth: AngularFireAuth) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginGuestComponent);
  }

  ngOnInit() {
    this.signForm = new FormGroup({
      'displayName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });

  }


  signUp() {
    if (this.signForm.invalid) {
      return;
    }
    this.afAuth
      .createUserWithEmailAndPassword(this.signForm.value.email, this.signForm.value.password)
      .then(res => {
        if (res.credential == null) {
          res.user.updateProfile({ displayName: this.signForm.value.displayName });
          console.log('You are Successfully signed up!', res);
          this.router.navigate(['/chat'])
        }

      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }
}
