import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel.class';
import { DialogCreateChannelComponent } from '../dialog-create-channel/dialog-create-channel.component';
import { MatDialog } from '@angular/material/dialog';
//import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  constructor(private router: Router, public afAuth: AngularFireAuth, public dialog: MatDialog) { }
  name: string;

  /// Dient als temporärer Datenbankersatz zum entwickeln der Channels ///
  db: any[] = [
    { name: 'welcome' },
    { name: 'coding' },
    { name: 'gaming' }
  ];
  ///////////////////////////////////////////////////////////////////////


  logout(): void {
    this.afAuth.signOut();
    this.router.navigate(['/'])
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogCreateChannelComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
      this.createNewChannel();
    });
  }


  createNewChannel() {
    if (this.name) {
      let channel = new Channel(this.name);
      this.db.push(channel);
    }
    this.name = "";
    console.log(this.db);
  }
}
