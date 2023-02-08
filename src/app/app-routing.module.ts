import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoggedWrapperComponent } from './components/logged-wrapper/logged-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { ChannelDetailComponent } from './components/channel-detail/channel-detail.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  {
    path: 'chat', component: LoggedWrapperComponent, children: [
      { path: 'channel/:id', component: ChannelDetailComponent }
    ]
  },


  // {path: 'channel/:id', component: ChannelDetailComponent},
  /* { path: '**', component: WelcomeComponent}, */
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
