import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  constructor(private router: Router) { }

  navigateToAdmin() {
    this.router.navigate(['admin']); // Navigate to the "Admin" page
  }
}
