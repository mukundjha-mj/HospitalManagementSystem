import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PatientAuthService } from '../../service/patient-auth.service';

@Component({
  selector: 'app-patient-login',
  standalone: false,
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {

  activeTab: string = 'login';

  // Login fields
  email: string = '';
  password: string = '';

  // Register fields
  registerData: any = {
    pname: '',
    email: '',
    password: '',
    pnumber: '',
    pcity: '',
    age: null,
    gender: '',
    bloodGroup: '',
    urgency: 'Normal',
    fees: 0
  };

  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  private baseUrl = 'http://localhost:9090/api/patient';

  constructor(
    private patientAuth: PatientAuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.patientAuth.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['/patient']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    });
  }

  onRegister(): void {
    if (!this.registerData.pname || !this.registerData.email || !this.registerData.password || !this.registerData.pnumber) {
      this.errorMessage = 'Please fill all required fields (Name, Email, Password, Phone)';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post(`${this.baseUrl}/create`, this.registerData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = 'Account created successfully! Please login.';
        this.activeTab = 'login';
        this.email = this.registerData.email;
        // Reset register form
        this.registerData = {
          pname: '', email: '', password: '', pnumber: '', pcity: '',
          age: null, gender: '', bloodGroup: '', urgency: 'Normal', fees: 0
        };
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Registration failed. Please try again.';
      }
    });
  }
}
