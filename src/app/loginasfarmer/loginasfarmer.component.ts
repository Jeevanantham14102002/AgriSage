
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-loginasfarmer',
  templateUrl: './loginasfarmer.component.html',
  styleUrls: ['./loginasfarmer.component.css'],
})
export class LoginasfarmerComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLoginClick(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Navigate to the next page on successful login
        this.router.navigate(['/signupasfarmer']);
      },
      (error) => {
        console.error('Error logging in:', error);
        // Show an alert box if data is not found
        alert('Data not found. Please check your credentials.');
      }
    );
  }
}
