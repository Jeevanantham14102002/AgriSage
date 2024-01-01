import { Component, OnInit } from '@angular/core';
import { CropsService } from 'src/app/crops.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crop-list',
  templateUrl: './crops-list.component.html',
  styleUrls: ['./crops-list.component.css']
})
export class CropsListComponent implements OnInit {
  cropNames: string[] = [];

  constructor(private cropsService: CropsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cropsService.getCropNames().subscribe(names => this.cropNames = names);
    console.log('CropsListComponent initialized');

  }

  navigateToMarketPrice(crop: string): void {
    if (crop) {
      //const encodedCropName = encodeURIComponent(crop);
      this.router.navigate(['/market-price',crop]);
      console.log(crop);
    } else {
      // Handle the case where no crop name is provided
      console.error('No crop name provided');
    }
  }

  
}
