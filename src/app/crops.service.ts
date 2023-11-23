// crops.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropsService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getCropNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/crops`);
  }

  getMarketPrices(cropName: string): Observable<any> {
    console.log(cropName)
    return this.http.get<any>(`${this.baseUrl}/market-price/${cropName}`);
  }

  getDistricts(cropName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/districts/${cropName}`);
  }

  getDataForDistrict(cropName: string, district: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/data-for-district/${cropName}/${district}`);
  }
}

