import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { CropinvoiceComponent } from './cropinvoice/cropinvoice.component';

const routes: Routes = [
  {
    path: '',  // Empty path for the default view
    component: AdminmainComponent,
    children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'cropinvoice', component: CropinvoiceComponent },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }