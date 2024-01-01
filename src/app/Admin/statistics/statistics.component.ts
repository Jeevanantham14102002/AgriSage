// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as chartData from '../../chart/apex'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as Tableau from 'tableau-api-js';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  constructor() { }
  public initViz(): void {
    const containerDiv = document.getElementById('vizContainer');
    const vizUrl = 'https://public.tableau.com/shared/9QK7BD2ZG?:display_count=n&:origin=viz_share_link';
    const options = {
      width: containerDiv.offsetWidth,
      height: 700
    };

    const viz = new Tableau.Viz(containerDiv, vizUrl, options);
  }

  public ngOnInit(): void {
    this.initViz();
  }

  

  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData1;
 


}
