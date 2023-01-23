import { Component } from '@angular/core';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { GuestLoginService } from 'src/app/services/guest-login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
/* import { ChannelService } from 'src/app/services/channel.service'; */

@Component({
  selector: 'app-logged-wrapper',
  templateUrl: './logged-wrapper.component.html',
  styleUrls: ['./logged-wrapper.component.scss']
})
export class LoggedWrapperComponent {
  userName: string;
  db: any[] = [
    {
      id: 'welcome',
      name: 'welcome'
    },
    {
      id: 'coding',
      name: 'coding'
    },
    {
      id: 'gaming',
      name: 'gaming'
    }
  ];
  constructor(
    public guestUser: GuestLoginService,
    private router: Router,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog,
    public firestore: AngularFirestore) {
    this.checkGuestUserisLogin();
  }

  checkGuestUserisLogin() {
    if (this.guestUser.displayName) {
      this.userName = this.guestUser.displayName;
    } else {
      this.userName = 'Jahleel';
    }
  }

  logout(): void {
    this.afAuth.signOut();
    this.router.navigate(['/'])
  }

  addChannel() {
    this.dialog.open(AddChannelComponent);
  }
}
