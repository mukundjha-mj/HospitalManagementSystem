import { Component, OnInit } from '@angular/core';
import { PatientAuthService } from '../../service/patient-auth.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: false,
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  patient: any;
  medicalRecords: number = 0;
  observations: number = 0;
  upcomingAppointments: number = 0;
  totalEntries: number = 0;

  recentEncounters: any[] = [];

  constructor(private patientAuth: PatientAuthService) { }

  ngOnInit(): void {
    this.patient = this.patientAuth.getPatientData();

    // Mock data - In real app, fetch from API
    this.medicalRecords = 3;
    this.observations = 8;
    this.upcomingAppointments = 2;
    this.totalEntries = this.medicalRecords + this.observations;

    this.recentEncounters = [
      { title: 'General Checkup', type: 'Routine Visit', date: 'Feb 5, 2026', status: 'finished' },
      { title: 'Blood Test Results', type: 'Lab Report', date: 'Feb 1, 2026', status: 'active' }
    ];
  }

  getInitials(): string {
    if (this.patient?.pname) {
      const names = this.patient.pname.split(' ');
      return names.map((n: string) => n.charAt(0).toUpperCase()).join('').substring(0, 2);
    }
    return 'P';
  }
}
