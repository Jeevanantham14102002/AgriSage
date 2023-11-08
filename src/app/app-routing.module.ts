import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
// import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginforpageComponent } from './loginforpage/loginforpage.component';
import { LoginasuserComponent } from './loginasuser/loginasuser.component';
import { LoginasfarmerComponent } from './loginasfarmer/loginasfarmer.component';
import { LoginasadminComponent } from './loginasadmin/loginasadmin.component';




const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
{
  path:'loginforpage', component:LoginforpageComponent
},
{
  path:'admin', loadChildren: ()=> import('./Admin/admin.module').then(m => m.AdminModule),
},
{
  path:'signuppage',component:SignuppageComponent
},
{
  path:'loginasuser',component:LoginasuserComponent
},

{
  path:'loginasfarmer',component:LoginasfarmerComponent
}
,

{
  path:'loginasadmin',component:LoginasadminComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
