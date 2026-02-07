import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-doctor-login',
  standalone: false,

  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent {

  username: string = "";
  password: string = "";

  inValidLogin = false;

  constructor(private router: Router, private docAuth: DoctorAuthenticationService) { }

  checkLogin() {
    this.docAuth.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/doctor']);
        this.inValidLogin = false;
      },
      error => {
        this.inValidLogin = true;
        // alert("Wrong Credentials !!!!"); // Removed alert
        // this.router.navigate(['/home']); // Keep on same page to retry
      }
    );
  }

}
