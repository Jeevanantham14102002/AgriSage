import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { LoginforpageComponent } from './loginforpage/loginforpage.component';
import { LoginasuserComponent } from './loginasuser/loginasuser.component';
import { LoginasfarmerComponent } from './loginasfarmer/loginasfarmer.component';
import { LoginasadminComponent } from './loginasadmin/loginasadmin.component';
import { SignupasuserComponent } from './signupasuser/signupasuser.component';
import { SignupasfarmerComponent } from './signupasfarmer/signupasfarmer.component';
import { SignupasadminComponent } from './signupasadmin/signupasadmin.component';

import { MarketPricesComponent } from './crops/market-prices/market-prices.component';



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
  path:'crops', loadChildren: ()=> import('./crops/crops.module').then(m => m.CropsModule),
},
{ path: 'market-price/:cropName', component: MarketPricesComponent },

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
{
  path:'signupasuser',component:SignupasuserComponent
},
{
  path:'signupasfarmer',component:SignupasfarmerComponent
},
{
  path:'signupasadmin',component:SignupasadminComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
