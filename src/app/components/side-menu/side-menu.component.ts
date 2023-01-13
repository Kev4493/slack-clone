import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
//import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  constructor(private router:Router, public afAuth:AngularFireAuth){}

  logout():void{
    this.afAuth.signOut();
    this.router.navigate(['/'])
  }
  
}
