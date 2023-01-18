import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { LoggedWrapperComponent } from './components/logged-wrapper/logged-wrapper.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogLoginGuestComponent } from './components/dialog-login-guest/dialog-login-guest.component';
import { LoginComponent } from './components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire/compat';
import { DialogCreateChannelComponent } from './components/dialog-create-channel/dialog-create-channel.component';
import { CurrentChannelComponent } from './components/current-channel/current-channel.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    WelcomeComponent,
    NavbarComponent,
    ImprintComponent,
    PrivacyComponent,
    ChannelsComponent,
    LoggedWrapperComponent,
    DialogLoginGuestComponent,
    LoginComponent,
    DialogCreateChannelComponent,
    SideMenuComponent,
    CurrentChannelComponent
  ],
  imports: [
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
    AngularFireModule.initializeApp(environment.firebase)
    
   /*  provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
