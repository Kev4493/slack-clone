import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/message.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from "firebase/auth";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.scss']
})
export class ChannelDetailComponent implements OnInit {

  channelId: any = '';
  message: Message = new Message();
  loading = false;
  auth = getAuth();
  user = this.auth.currentUser;
  d = new Date();
  time = this.d.getTime()
  allMessages: any = [];

  @ViewChild('textMessage') textMessage!: ElementRef;
  
  constructor(
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
  ) {

  }

  ngOnInit() {
    this.newMessage();
    // console.log('user name', this.user.displayName)

    this.route.paramMap.subscribe(paramMap => {
      this.channelId = paramMap.get('id');
      console.log(this.channelId);
      /* this.getChannel(); */

      this
        .firestore
        .collection('channels')
        .doc(this.channelId)
        .valueChanges()
        .subscribe((text: any) => {
          console.log('channel update', text);
          this.message.text = text.messageText;
          this.message.channelName = text.channelName;
          this.message.creator = text.author;
          this.message.createdAt = text.created_at;
        });
    });
  }
  
  
  
  
  
  
  //MOVE FUNCTION TO CHATBOX.TS!
  //CREATE NEW MESSAGE
  newMessage() {
    this.message = new Message();
  }

  //SEND MESSAGE
  sendMessage() {
    this.loading = true;
    this.saveMessage();
  }

  saveMessage() {
    let textMessage = this.textMessage.nativeElement;

    this.message.text.push(textMessage.value);
    this.message.creator.push(this.user.displayName);
    this.message.createdAt.push(this.time);
    this.allMessages = this.message.toJSON();
    /* console.log('************all messages:*************',this.allMessages.author[1]); */
    this.firestore
    .collection('channels')
    .doc(this.channelId)
    .update(this.message.toJSON())
    .then((result: any) => {
      console.log('channel update', result);
      if (result == null) {
        console.log('result is null or undefined');
      } else {
      }
      this.loading = false;
    });

    textMessage.value = '';

  }

}
