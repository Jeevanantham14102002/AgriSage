import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { CropsListComponent } from './crops-list/crops-list.component';
import { MarketPricesComponent } from './market-prices/market-prices.component';



const routes: Routes = [
  {
    path: '',
    component: CropsListComponent},
   
      { path: 'market-price/:cropName', component: MarketPricesComponent },
 
    ]
  


  
  @NgModule({
    imports: [RouterModule.forChild(routes,)],
    exports: [RouterModule]
  })
  export class CropsRoutingModule { }