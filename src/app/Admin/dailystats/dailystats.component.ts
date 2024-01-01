import { Component } from '@angular/core';
import * as chartData from '../../chart/apex'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
@Component({
  selector: 'app-dailystats',
  templateUrl: './dailystats.component.html',
  styleUrls: ['./dailystats.component.css']
})
export class DailystatsComponent {
  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData1;
 
}
