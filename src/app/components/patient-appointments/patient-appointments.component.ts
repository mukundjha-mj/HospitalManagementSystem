import { Component, OnInit } from '@angular/core';
import { PatientAuthService } from '../../service/patient-auth.service';

@Component({
  selector: 'app-patient-appointments',
  standalone: false,
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  patient: any;

  upcomingCount: number = 2;
  completedCount: number = 5;
  cancelledCount: number = 0;

  upcomingAppointments: any[] = [];
  pastAppointments: any[] = [];

  constructor(private patientAuth: PatientAuthService) { }

  ngOnInit(): void {
    this.patient = this.patientAuth.getPatientData();

    // Mock data - replace with actual API calls
    this.upcomingAppointments = [
      {
        day: '15',
        month: 'Feb',
        doctorName: 'Dr. Sarah Wilson',
        specialty: 'General Medicine',
        time: '10:30 AM',
        location: 'Room 201',
        reason: 'Regular checkup',
        status: 'confirmed'
      },
      {
        day: '22',
        month: 'Feb',
        doctorName: 'Dr. James Chen',
        specialty: 'Cardiology',
        time: '2:00 PM',
        location: 'Room 405',
        reason: 'Follow-up consultation',
        status: 'pending'
      }
    ];

    this.pastAppointments = [
      {
        day: '05',
        month: 'Feb',
        doctorName: 'Dr. Sarah Wilson',
        specialty: 'General Medicine',
        time: '11:00 AM',
        status: 'completed'
      },
      {
        day: '28',
        month: 'Jan',
        doctorName: 'Dr. Emily Ross',
        specialty: 'Dermatology',
        time: '3:30 PM',
        status: 'completed'
      }
    ];

    this.upcomingCount = this.upcomingAppointments.length;
    this.completedCount = this.pastAppointments.length;
  }
}
