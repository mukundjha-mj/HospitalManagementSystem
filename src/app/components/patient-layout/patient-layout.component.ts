import { Component, OnInit } from '@angular/core';
import { PatientAuthService } from '../../service/patient-auth.service';

@Component({
  selector: 'app-patient-layout',
  standalone: false,
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent implements OnInit {

  sidebarOpen: boolean = false;
  patient: any;

  constructor(private patientAuth: PatientAuthService) { }

  ngOnInit(): void {
    this.patient = this.patientAuth.getPatientData();
  }

  getInitials(): string {
    if (this.patient?.pname) {
      const names = this.patient.pname.split(' ');
      return names.map((n: string) => n.charAt(0).toUpperCase()).join('').substring(0, 2);
    }
    return 'P';
  }

  logout(): void {
    this.patientAuth.logout();
  }
}
