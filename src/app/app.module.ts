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
import { LoginasadminComponent } from './loginasadmin/loginasadmin.component';
import { AdminModule } from './Admin/admin.module';
import { CropsModule } from './crops/crops.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginpageComponent,
    SignuppageComponent,
    LoginforpageComponent,
    LoginasfarmerComponent,
    LoginasuserComponent,
    LoginasadminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CropsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
