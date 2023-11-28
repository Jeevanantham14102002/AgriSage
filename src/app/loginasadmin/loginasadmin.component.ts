import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/loginservice.service';
@Component({
  selector: 'app-loginasadmin',
  templateUrl: './loginasadmin.component.html',
  styleUrls: ['./loginasadmin.component.css']
})
export class LoginasadminComponent {

// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/loginservice.service';

// @Component({
//   selector: 'app-loginasfarmer',
//   templateUrl: './loginasfarmer.component.html',
//   styleUrls: ['./loginasfarmer.component.css'],
// })
// export class LoginasfarmerComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLoginClick(): void {

      this.loginService.loginasadmin(this.email, this.password).subscribe(

      (response) => {
          console.log('Login successfully:', response);
           this.router.navigate(['/crops']);

          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Error logining admin:', error);
          // Handle error, e.g., display an error message
        }
      );
    } 
  }
