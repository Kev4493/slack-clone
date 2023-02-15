import { Component } from '@angular/core';
import { ChannelDetailComponent } from '../channel-detail/channel-detail.component';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})

export class ChatboxComponent {


  constructor(
    public details: ChannelDetailComponent, 
  ) {

  }

  postToChannel() {

  }
  changedEditor(){
    
  }
}
