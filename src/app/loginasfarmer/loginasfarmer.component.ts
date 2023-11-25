import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginasfarmer',
  templateUrl: './loginasfarmer.component.html',
  styleUrls: ['./loginasfarmer.component.css']
})
export class LoginasfarmerComponent {
  constructor(private router: Router) {}

  onLoginClick() {
    // Navigate to the crops module route
    this.router.navigate(['/crops']);
  }
}
