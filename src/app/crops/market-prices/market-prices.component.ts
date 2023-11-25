import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CropsService } from 'src/app/crops.service';
import * as chartData from '../../chart/apex';
import { format, isValid, parseISO } from 'date-fns';

@Component({
  selector: 'app-market-prices',
  templateUrl: './market-prices.component.html',
  styleUrls: ['./market-prices.component.css']
})
export class MarketPricesComponent implements OnInit {
  crop: string | null = null;
  districts: string[] = [];
  selectedDistrict: string | undefined;
  syntheticPricesData: any[] = [];
  finalPricesData: any[] = [];
  public sdOptions: any = { ...chartData.ApexSyntheticData };
  public fdOptions: any = { ...chartData.ApexFinalPriceData };

  constructor(
    private route: ActivatedRoute,
    private cropsService: CropsService
  ) {}

  ngOnInit(): void {
    // Extract the crop name from the URL
    const url = window.location.href;
    const startIndex = url.indexOf('/market-price/') + '/market-price/'.length;
    const endIndex = url.indexOf('/', startIndex);
    this.crop = url.slice(startIndex, endIndex !== -1 ? endIndex : undefined);

    console.log('Market price initialized');
    console.log('Crop Name:', this.crop);

    // Fetch the list of districts
    this.cropsService.getDistricts(this.crop).subscribe(data => {
      this.districts = data;
    });
  }

  onDistrictChange(): void {
    if (this.selectedDistrict) {
      this.cropsService.getDataForDistrict(this.crop ?? '', this.selectedDistrict).subscribe(data => {
        this.syntheticPricesData = data.synthetic_prices;
        this.finalPricesData = data.final_prices;
  
        // Log to check data format
        console.log('Synthetic Prices Data:', this.syntheticPricesData);
        console.log('Final Prices Data:', this.finalPricesData);
  
        // Find the maximum values for the synthetic and final graphs
        const syntheticMax = Math.max(...this.syntheticPricesData.map(item => parseFloat(item.Market_Price)));
        const finalMax = Math.max(...this.finalPricesData.map(item => parseFloat(item.Market_Price)));
  
        // Update the chart data
        this.sdOptions.series = [{
          name: 'Synthetic Prices',
          data: this.syntheticPricesData.map(item => parseFloat(item.Market_Price).toFixed(2))
        }];
        this.sdOptions.yaxis.max = syntheticMax;
  
        this.fdOptions.series = [{
          name: 'Final Prices',
          data: this.finalPricesData.map(item => parseFloat(item.Market_Price).toFixed(2))
        }];
        this.fdOptions.yaxis.max = finalMax;
  
        this.sdOptions.xaxis.categories = this.syntheticPricesData
          .map(item => isValid(new Date(item.Date)) ? format(new Date(item.Date), 'dd MMM yyyy') : null)
          .filter(date => date !== null);
  
        this.fdOptions.xaxis.categories = this.finalPricesData
          .map(item => isValid(new Date(item.Date)) ? format(new Date(item.Date), 'dd MMM yyyy') : null)
          .filter(date => date !== null);
  
        // Log to check if data is correct
        console.log('Updated Synthetic Prices Options:', this.sdOptions);
        console.log('Updated Final Prices Options:', this.fdOptions);
      });
    }
  }
  
}  