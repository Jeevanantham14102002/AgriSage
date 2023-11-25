import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CropinvoiceComponent } from './cropinvoice/cropinvoice.component';

@NgModule({
  declarations: [
    AdminmainComponent,
    StatisticsComponent,
    CropinvoiceComponent,

  ],
  imports: [
    CommonModule,
    NgChartsModule,
    NgApexchartsModule,
    AdminRoutingModule,
  
    NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
      }),

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
