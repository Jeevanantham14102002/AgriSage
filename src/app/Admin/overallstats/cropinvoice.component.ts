import { Component, OnInit } from '@angular/core';
import * as Tableau from 'tableau-api-js';
@Component({
  selector: 'app-cropinvoice',
  templateUrl: './cropinvoice.component.html',
  styleUrls: ['./cropinvoice.component.css']
})
export class CropinvoiceComponent {
  public initViz(): void {
    const containerDiv = document.getElementById('vizContainer');
    const vizUrl = 'https://public.tableau.com/views/Book1_17041033449920/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    const options = {
      width: containerDiv.offsetWidth,
      height: 700
    };

    const viz = new Tableau.Viz(containerDiv, vizUrl, options);
  }

  public ngOnInit(): void {
    this.initViz();
  }

}
