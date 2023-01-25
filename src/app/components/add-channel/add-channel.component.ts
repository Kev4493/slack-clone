import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Message } from 'src/app/models/message.class';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent {
  message = new Message();
  loading = false;

  constructor(public dialog: MatDialogRef<AddChannelComponent>, public firestore: AngularFirestore) {

  }


  saveUser(){
    this.loading = true;

    //schreiben im firestore

    this.firestore.collection('channels').add(this.message.toJSON()).then((result:any)=>{    
      this.loading = false;
      console.log('adding channel finished', result);
      this.dialog.close();
    });
  }

}
