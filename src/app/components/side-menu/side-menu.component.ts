import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel.class';
import { DialogCreateChannelComponent } from '../dialog-create-channel/dialog-create-channel.component';
import { MatDialog } from '@angular/material/dialog';
import { ChannelService } from 'src/app/services/channel.service';
//import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  constructor(private router: Router, public afAuth: AngularFireAuth, public dialog: MatDialog, public channel: ChannelService) { }
  // id: any;
  // name: string;


  /// Dient als temporärer Datenbankersatz zum entwickeln der Channels ///
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
  ///////////////////////////////////////////////////////////////////////


  logout(): void {
    this.afAuth.signOut();
    this.router.navigate(['/'])
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogCreateChannelComponent, {
      data: { name: this.channel.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.channel.name = result;
      this.createNewChannel();
    });
  }


  createNewChannel() {
    if (this.channel.name) {
      this.channel.id = this.channel.name;
      let channel = new Channel(this.channel.name, this.channel.id);
      this.db.push(channel);
    }
    this.channel.name = "";
    console.log(this.db);
  }
}
