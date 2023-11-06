import { Component, OnInit } from '@angular/core';
import * as chartData from '../../chart/apex'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-adminmain', // This is the selector you will use to reference your component in templates.
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData1;
 


}
