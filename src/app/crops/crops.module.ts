import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropsRoutingModule } from './crops-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CropsListComponent } from './crops-list/crops-list.component';
import { MarketPricesComponent } from './market-prices/market-prices.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    CropsListComponent,
    MarketPricesComponent,


  ],
  imports: [
    CommonModule,
    CropsRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CropsModule { }
