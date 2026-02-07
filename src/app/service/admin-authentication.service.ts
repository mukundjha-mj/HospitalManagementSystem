import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {


  private baseUrl = 'http://localhost:9090/api/login/admin';

  constructor(private httpClient: HttpClient) { }

  authenticate(adminUsername: string, adminPassword: string): Observable<any> {
    const adminData = { username: adminUsername, password: adminPassword };
    return this.httpClient.post<any>(this.baseUrl, adminData).pipe(
      map(response => {
        sessionStorage.setItem('adminUsername', adminUsername);
        sessionStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  isAdminLoggedIn() {
    console.log("Admin is Logged In ....");
    let adminUser = sessionStorage.getItem('adminUsername');
    let token = sessionStorage.getItem('token');
    return !(adminUser == null || token == null);
  }

  adminLogout() {
    console.log("Admin logged out....!");
    sessionStorage.removeItem('adminUsername');
    sessionStorage.removeItem('token');
  }
}

