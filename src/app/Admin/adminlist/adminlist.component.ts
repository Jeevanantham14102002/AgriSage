
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-adminlist',
//   templateUrl: './adminlist.component.html',
//   styleUrls: ['./adminlist.component.css']
// })
// export class AdminlistComponent {
//   // Your JavaScript code converted to TypeScript
//   myList: string[] = ["item1", "item2", "item3"];

//   addToList(item: string) {
//     this.myList.push(item);
//   }

//   removeFromList(index: number) {
//     this.myList.splice(index, 1);
//   }
// }




import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminListComponent implements OnInit {
  admins: any[] = []; // Array to hold farmer data

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdminData();
  }

  getAdminData(): void {
    // Make HTTP GET request to your Flask backend endpoint
    this.http.get<any[]>('http://localhost:5000/get-admins').subscribe(
      (data) => {
        this.admins = data; // Assign received data to the farmers array
      },
      (error) => {
        console.log('Error fetching admin data:', error);
      }
    );
  }
}
