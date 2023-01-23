import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/models/channel';
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
    public firestore: AngularFirestore) {

  }

  ngOnInit() {
    this.newMessage();
    // console.log('user name', this.user.displayName)

    this.route.paramMap.subscribe(paramMap => {
      this.channelId = paramMap.get('id');
      /* this.getChannel(); */

      this
        .firestore
        .collection('channels')
        .doc(this.channelId)
        .valueChanges()
        .subscribe((text: any) => {
          console.log('channel update', text);
          this.message.messageText = text.messageText;
          this.message.channelName = text.channelName;
          this.message.author = text.author;
          this.message.created_at = text.created_at;
          

        })
    })
  }


    newMessage(){
      this.message = new Message();  
    }


  sendMessage() {

    this.loading = true;
    this.saveMessage();

  }

  saveMessage() {
    
    let textMessage = this.textMessage.nativeElement;

    this.message.messageText.push(textMessage.value);
    this.message.author.push(this.user.displayName);
    this.message.created_at.push(this.time);  
    this.allMessages = this.message.toJSON();
    /* console.log('************all messages:*************',this.allMessages.author[1]); */
   

    this.firestore.collection('channels').doc(this.channelId).update(this.message.toJSON()).then((result: any) => {
      console.log('channel update', result);
      
      
      if (result == null) {
        console.log('result is null or undefined');
      } else {
       
        
      }
      
      this.loading = false;
    });

    textMessage.value ='';
    
  }

}
