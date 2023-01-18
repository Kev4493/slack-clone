import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel.class';
//import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  constructor(private router:Router, public afAuth:AngularFireAuth){}
  name: string = 'Default';

  // Dient als temporärer Datenbankersatz zum entwickeln der Channels

  db: any[] = [
    {name: 'welcome'},
    {name: 'coding'},
    {name: 'gaming'},
    {name: 'testing'}
  ];
  

  logout():void{
    this.afAuth.signOut();
    this.router.navigate(['/'])
  }

  createChannel() {
    let channel = new Channel(this.name);
    this.db.push(channel);
    console.log(this.db);
  }



  
}
