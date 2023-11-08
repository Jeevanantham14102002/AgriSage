// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as chartData from '../../chart/apex'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  constructor() { }

  ngOnInit(): void {
  }

  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData1;
 


}
