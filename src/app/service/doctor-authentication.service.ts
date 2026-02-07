import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DoctorAuthenticationService {


  private baseUrl = 'http://localhost:9090/api/login/doctor';

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    const doctorData = { username: username, password: password };
    return this.httpClient.post<any>(this.baseUrl, doctorData).pipe(
      map(response => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  isDoctorLoggedIn() {
    let user = sessionStorage.getItem('username');
    let token = sessionStorage.getItem('token');
    console.log("Doctor is Logged In ....");
    return !(user == null || token == null);
  }

  docLogout() {
    console.log("Doctor is Logged Out ....");
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
}

