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
  private signupEndpoint = '/signup-farmer'; // Update with your signup endpoint

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<any> {
    const farmerData = { email, password };
    return this.http.post(`${this.apiUrl}${this.signupEndpoint}`, farmerData);
  }
}
