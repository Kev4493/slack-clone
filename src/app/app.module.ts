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
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
