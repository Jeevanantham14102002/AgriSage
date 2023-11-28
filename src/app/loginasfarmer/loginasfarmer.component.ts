
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

      this.loginService.loginasfarmer(this.email, this.password).subscribe(

      (response) => {
          console.log('Farmer created successfully:', response);
           this.router.navigate(['/crops']);

          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Error creating farmer:', error);
          // Handle error, e.g., display an error message
        }
      );
    } 
  }
