import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginforpageComponent } from './loginforpage/loginforpage.component';
import { LoginasfarmerComponent } from './loginasfarmer/loginasfarmer.component';
import { LoginasuserComponent } from './loginasuser/loginasuser.component';
import { AdminmainComponent } from './Admin/adminmain/adminmain.component';
import { LoginasadminComponent } from './loginasadmin/loginasadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginpageComponent,
    SignuppageComponent,
    LoginforpageComponent,
    LoginasfarmerComponent,
    // LoginasadminComponent,
    LoginasuserComponent,
    LoginasadminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
