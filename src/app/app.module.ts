import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginforpageComponent } from './loginforpage/loginforpage.component';
import { LoginasfarmerComponent } from './loginasfarmer/loginasfarmer.component';
import { LoginasuserComponent } from './loginasuser/loginasuser.component';
import { LoginasadminComponent } from './loginasadmin/loginasadmin.component';
import { AdminModule } from './Admin/admin.module';
import { SignupasfarmerComponent } from './signupasfarmer/signupasfarmer.component';
import { SignupasuserComponent } from './signupasuser/signupasuser.component';
import { SignupasadminComponent } from './signupasadmin/signupasadmin.component';

import { CropsModule } from './crops/crops.module';
import { BackendComponent } from './backend/backend.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginpageComponent,
    LoginforpageComponent,
    LoginasfarmerComponent,
    LoginasuserComponent,
    LoginasadminComponent,
    SignupasfarmerComponent,
    SignupasuserComponent,
    SignupasadminComponent,
    BackendComponent,
    
    
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
