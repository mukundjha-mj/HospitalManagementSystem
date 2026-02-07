import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PatientAuthService {

    private baseUrl = 'http://localhost:9090/api/patient';

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
            map(response => {
                if (response && response.patient) {
                    sessionStorage.setItem('patientToken', 'authenticated');
                    sessionStorage.setItem('patientId', response.patient.pid.toString());
                    sessionStorage.setItem('patientName', response.patient.pname);
                    sessionStorage.setItem('patientData', JSON.stringify(response.patient));
                    return response;
                }
                throw new Error('Invalid credentials');
            }),
            catchError(error => {
                console.error('Login failed:', error);
                throw error;
            })
        );
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem('patientToken') === 'authenticated';
    }

    getPatientId(): number {
        const id = sessionStorage.getItem('patientId');
        return id ? parseInt(id) : 0;
    }

    getPatientName(): string {
        return sessionStorage.getItem('patientName') || '';
    }

    getPatientData(): any {
        const data = sessionStorage.getItem('patientData');
        return data ? JSON.parse(data) : null;
    }

    logout(): void {
        sessionStorage.removeItem('patientToken');
        sessionStorage.removeItem('patientId');
        sessionStorage.removeItem('patientName');
        sessionStorage.removeItem('patientData');
        this.router.navigate(['/home']);
    }
}
