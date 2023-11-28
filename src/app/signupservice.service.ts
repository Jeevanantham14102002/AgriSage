// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SignupserviceService {

//   constructor() { }
// }


// signupservice.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupserviceService {
  private apiUrl = 'http://localhost:5000'; // Update with your Flask server URL
  private signupEndpoint1 = '/signup-farmer'; // Update with your signup endpoint
  private signupEndpoint2 = '/signup-admin'; // Update with your signup endpoint
  private signupEndpoint3 = '/signup-user'; // Update with your signup endpoint
  constructor(private http: HttpClient) {}

  signupasfarmer(email: string, password: string): Observable<any> {
    const farmerData = { email, password };
    console.log(farmerData)
    return this.http.post(`${this.apiUrl}${this.signupEndpoint1}`, farmerData);
  }
  signupasadmin(email: string, password: string): Observable<any> {
    const adminData = { email, password };
    console.log(adminData);
    return this.http.post(`${this.apiUrl}${this.signupEndpoint2}`, adminData);
}
  signupasuser(email: string, password: string): Observable<any> {
    const userData = { email, password };
    console.log(userData);
    return this.http.post(`${this.apiUrl}${this.signupEndpoint3}`, userData);
}
}
