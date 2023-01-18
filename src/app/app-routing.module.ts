import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoggedWrapperComponent } from './components/logged-wrapper/logged-wrapper.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: LoggedWrapperComponent },
  { path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
