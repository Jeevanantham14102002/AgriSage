import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { AdminmainComponent } from './adminmain/adminmain.component';

@NgModule({
  declarations: [
    AdminmainComponent

  ],
  imports: [
    CommonModule,
    NgChartsModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
      }),

  ]
})
export class AdminModule { }
