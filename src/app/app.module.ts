//ANGULAR_
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ROUTING_ 
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS_
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddChannelComponent } from './components/add-channel/add-channel.component';
import { ChannelDetailComponent } from './components/channel-detail/channel-detail.component';
import { DialogCreateChannelComponent } from './dialogs/dialog-create-channel/dialog-create-channel.component';
import { CurrentChannelComponent } from './components/current-channel/current-channel.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { DialogLoginGuestComponent } from './dialogs/dialog-login-guest/dialog-login-guest.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { LoggedWrapperComponent } from './components/logged-wrapper/logged-wrapper.component';
import { LoginComponent } from './components/login/login.component';

//MAT_FORMS
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

//FIREBASE_
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// NGX_QUILL
import { QuillModule } from 'ngx-quill';
import { QuillConfigModule } from 'ngx-quill/config';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    WelcomeComponent,
    ImprintComponent,
    PrivacyComponent,
    ChannelListComponent,
    LoggedWrapperComponent,
    DialogLoginGuestComponent,
    LoginComponent,
    AddChannelComponent,
    ChannelDetailComponent,
    DialogCreateChannelComponent,
    CurrentChannelComponent,
    ChatboxComponent
  ],
  imports: [
    QuillConfigModule.forRoot({
      modules: {
        syntax: true
      }
    }),
    QuillModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatTreeModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase)

    /*  provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideAuth(() => getAuth()),
     provideDatabase(() => getDatabase()),
     provideFirestore(() => getFirestore()) */
  ],
  providers: [
    ChannelListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
