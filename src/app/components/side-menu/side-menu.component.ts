import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AddChannelComponent } from '../add-channel/add-channel.component';
//import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  constructor(private router:Router, public afAuth:AngularFireAuth,public dialog: MatDialog, public firestore:AngularFirestore){}
 


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

  openDialog(){
    this.dialog.open(AddChannelComponent);

  }
  
}
