import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../entity/patient';
import { MedicalRecordService } from '../../service/medical-record.service';
import { MedicalRecord } from '../../model/medical-record';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-view-patient',
  standalone: false,
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  id: number = 0;
  patient: Patient = new Patient();
  medicalRecords: MedicalRecord[] = [];
  selectedFile: File | null = null;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router, private medicalRecordService: MedicalRecordService, private doctorAuth: DoctorAuthenticationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
      this.loadMedicalRecords();
    })
  }

  loadMedicalRecords() {
    if (this.patient.pname) {
      this.medicalRecordService.getRecordsByPatient(this.patient.pname).subscribe(data => {
        this.medicalRecords = data;
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadMedicalRecord() {
    if (this.selectedFile && this.patient.pname) {
      this.medicalRecordService.uploadFile(this.selectedFile, this.patient.pname).subscribe(resp => {
        alert("File Uploaded Successfully!");
        this.loadMedicalRecords();
        this.selectedFile = null;
      }, error => {
        alert("Upload Failed!");
      });
    }
  }

  downloadRecord(id: number, fileName: string) {
    this.medicalRecordService.downloadFile(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  logout() {
    this.doctorAuth.docLogout();
    this.router.navigate(['/home']);
  }
}
