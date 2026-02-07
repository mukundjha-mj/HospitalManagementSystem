import { Component, OnInit } from '@angular/core';
import { PatientAuthService } from '../../service/patient-auth.service';

@Component({
  selector: 'app-emergency-card',
  standalone: false,
  templateUrl: './emergency-card.component.html',
  styleUrls: ['./emergency-card.component.css']
})
export class EmergencyCardComponent implements OnInit {

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
}
