// signupasfarmer.component.ts

import { Component } from '@angular/core';
import { SignupserviceService } from 'src/app/signupservice.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-signupasfarmer',
  templateUrl: './signupasadmin.component.html',
  styleUrls: ['./signupasadmin.component.css'],
})
export class SignupasadminComponent {
  email: string = '';
  password: string = '';

  

  constructor(private SignupserviceService: SignupserviceService,
    private router: Router ) {}

  signupasadmin(): void {
    if (this.checkEmailAndPassword(this.email,this.password)) {
      this.SignupserviceService.signupasadmin(this.email, this.password).subscribe(
        (response) => {
          console.log('Admin created successfully:', response);
          this.router.navigate(['/loginasadmin']);

          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Error creating Admin:', error);
          // Handle error, e.g., display an error message
        }
      );
    } else {
      console.log('Invalid input. Please check your details.');
    }
  }

  checkEmailAndPassword(email: string, password: string) {
    // Check if the email address is valid.
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return false;
    }
  
    // Check if the password is valid.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return false;
    }
  
    // If the email address and password are both valid, return true.
    return true;
  }
}
