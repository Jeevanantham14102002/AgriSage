// signupasfarmer.component.ts

import { Component } from '@angular/core';
import { SignupserviceService } from 'src/app/signupservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupasfarmer',
  templateUrl: './signupasfarmer.component.html',
  styleUrls: ['./signupasfarmer.component.css'],
})
export class SignupasfarmerComponent {
  email: string = '';
  password: string = '';
  router: any;

  constructor(private SignupserviceService: SignupserviceService) {}

  signupasfarmer(): void {
    if (this.checkEmailAndPassword(this.email,this.password)) {
      this.SignupserviceService.signupasfarmer(this.email, this.password).subscribe(
        (response) => {
          console.log('Farmer created successfully:', response);
          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Error creating farmer:', error);
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
