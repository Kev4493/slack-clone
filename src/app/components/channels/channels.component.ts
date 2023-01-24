import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  allChannels: any = [];

  constructor(
    public dialog: MatDialog,
    public firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore
    .collection('channels')
    .valueChanges({ idField: 'customIdName' })
    .subscribe((changes: any) => {
      console.log('received changes from DB', changes);
      if (changes == null) {
        console.log('changes is null or undefined');
      } else {
        this.allChannels = changes;
      }
    });
  }


}
