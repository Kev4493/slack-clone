import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoggedWrapperComponent } from '../../components/logged-wrapper/logged-wrapper.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog-create-channel',
  templateUrl: './dialog-create-channel.component.html',
  styleUrls: ['./dialog-create-channel.component.scss']
})

export class DialogCreateChannelComponent {

  constructor(
    public dialogRef: MatDialogRef<LoggedWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
