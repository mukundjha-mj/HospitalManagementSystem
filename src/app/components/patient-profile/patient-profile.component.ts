import { Component, OnInit } from '@angular/core';
import { PatientAuthService } from '../../service/patient-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-profile',
  standalone: false,
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient: any;
  isEditing: boolean = false;
  formData: any = {};

  constructor(
    private patientAuth: PatientAuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.patient = this.patientAuth.getPatientData();
    this.initFormData();
  }

  initFormData(): void {
    this.formData = {
      pname: this.patient?.pname || '',
      pphone: this.patient?.pphone || '',
      age: this.patient?.age || '',
      gender: this.patient?.gender || '',
      bloodGroup: this.patient?.bloodGroup || '',
      pcity: this.patient?.pcity || '',
      allergies: this.patient?.allergies || '',
      medications: this.patient?.medications || '',
      emergencyContact: this.patient?.emergencyContact || '',
      emergencyPhone: this.patient?.emergencyPhone || ''
    };
  }

  toggleEdit(): void {
    if (this.isEditing) {
      this.saveProfile();
    } else {
      this.isEditing = true;
    }
  }

  saveProfile(): void {
    // Update patient data via API
    const updateData = { ...this.patient, ...this.formData };

    this.http.put(`http://localhost:9090/api/patient/${this.patient.pid}`, updateData)
      .subscribe({
        next: (response: any) => {
          this.patient = response;
          sessionStorage.setItem('patientData', JSON.stringify(response));
          this.isEditing = false;
          alert('Profile updated successfully!');
        },
        error: (err) => {
          console.error('Error updating profile:', err);
          alert('Failed to update profile. Please try again.');
        }
      });
  }

  getInitials(): string {
    if (this.patient?.pname) {
      const names = this.patient.pname.split(' ');
      return names.map((n: string) => n.charAt(0).toUpperCase()).join('').substring(0, 2);
    }
    return 'P';
  }

  getMemberSince(): string {
    // Mock date - in real app, get from patient data
    return 'February 2026';
  }
}
