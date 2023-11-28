// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class LoginserviceService {

// //   constructor() { }
// // }
// // src/app/login.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class LoginService {
// //   private baseUrl = 'http://localhost:5500'; // Update with your Flask server URL

// //   constructor(private http: HttpClient) {}

// //   login(email: string, password: string): Observable<any> {
// //     const data = { email, password };
// //     return this.http.post(`${this.baseUrl}/login`, data);
// //   }
// // }
// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {
//   private baseUrl = 'http://localhost:5500'; // Update with your Flask server URL

//   constructor(private http: HttpClient) {}

//   login(email: string, password: string): Observable<any> {
//     const data = { email, password };
//     return this.http.post(`${this.baseUrl}/login`, data).pipe(
//       tap(response => console.log('Server Response:', response)), // Log the response
//       catchError(error => {
//         console.error('Error in login service:', error);
//         throw error; // Rethrow the error
//       })
//     );
//   }
// }

// Create an interface to represent the structure of the response
interface LoginResponse {
  // Define the properties based on the actual structure of your response
  // For example, assuming the server returns an 'accessToken'
  accessToken: string;
  // Add other properties if needed
}

// Update the login service accordingly
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://localhost:5000'; // Update with your Flask server URL
  LoginEndPoint1='/loginasfarmer'
  LoginEndPoint2='/loginasadmin'
  LoginEndPoint3='/loginasuser'


  constructor(private http: HttpClient) {}

  loginasfarmer(email: string, password: string): Observable<any> {
    const farmerData = { email, password };
    console.log(farmerData)
    return this.http.post(`${this.baseUrl}${this.LoginEndPoint1}`, farmerData);
  }
  loginasadmin(email: string, password: string): Observable<any> {
    const adminData = { email, password };
    console.log(adminData)
    return this.http.post(`${this.baseUrl}${this.LoginEndPoint2}`, adminData);
  }
  loginasuser(email: string, password: string): Observable<any> {
    const userData = { email, password };
    console.log(userData)
    return this.http.post(`${this.baseUrl}${this.LoginEndPoint3}`, userData);
  }
}
