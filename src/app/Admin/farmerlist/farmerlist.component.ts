
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farmerlist',
  templateUrl: './farmerlist.component.html',
  styleUrls: ['./farmerlist.component.css']
})
export class FarmerListComponent implements OnInit {
  farmers: any[] = []; // Array to hold farmer data

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFarmerData();
  }

  getFarmerData(): void {
    // Make HTTP GET request to your Flask backend endpoint
    this.http.get<any[]>('http://localhost:5000/get-farmers').subscribe(
      (data) => {
        this.farmers = data; // Assign received data to the farmers array
      },
      (error) => {
        console.log('Error fetching farmer data:', error);
      }
    );
  }
}
