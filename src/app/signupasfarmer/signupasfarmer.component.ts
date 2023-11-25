// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signupasfarmer',
//   templateUrl: './signupasfarmer.component.html',
//   styleUrls: ['./signupasfarmer.component.css']
// })
// export class SignupasfarmerComponent {

// }



// signupasfarmer.component.ts

import { Component } from '@angular/core';
import { SignupserviceService } from 'src/app/signupservice.service';

@Component({
  selector: 'app-signupasfarmer',
  templateUrl: './signupasfarmer.component.html',
  styleUrls: ['./signupasfarmer.component.css'],
})
export class SignupasfarmerComponent {
  email: string = '';
  password: string = '';

  constructor(private SignupserviceService: SignupserviceService) {}

  signUp(): void {
    if (this.validateInput()) {
      this.SignupserviceService.signUp(this.email, this.password).subscribe(
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

  private validateInput(): boolean {
    // Implement your input validation logic here
    // Return true if the input is valid, false otherwise
    return this.email.trim() !== '' && this.password.trim() !== '';
  }
}
