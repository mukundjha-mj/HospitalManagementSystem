import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DocDashbordComponent } from './components/doc-dashbord/doc-dashbord.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { DoctorAuthGuardService } from './service/doctor-auth-guard.service';

// CuraNet Patient Portal Components
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientLayoutComponent } from './components/patient-layout/patient-layout.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { EmergencyCardComponent } from './components/emergency-card/emergency-card.component';
import { PatientAppointmentsComponent } from './components/patient-appointments/patient-appointments.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientAuthGuardService } from './service/patient-auth-guard.service';

const routes: Routes = [
  // Admin Routes
  {
    path: "admin", component: AdminDashComponent, canActivate: [AdminAuthGuardService]
  },
  {
    path: "appointmentlist", component: AppointmentComponent, canActivate: [AdminAuthGuardService]
  },
  {
    path: 'appointmentlist/create-appointment', component: CreateAppointmentComponent, canActivate: [AdminAuthGuardService]
  },

  // Public Routes
  {
    path: "home", component: HomePageComponent
  },
  {
    path: '', redirectTo: "home", pathMatch: "full"
  },

  // Doctor Routes
  {
    path: "doctor", component: DocDashbordComponent, canActivate: [DoctorAuthGuardService]
  },
  {
    path: "create-patient", component: CreatePatientComponent, canActivate: [DoctorAuthGuardService]
  },
  {
    path: "view-medicine", component: MedicineListComponent, canActivate: [DoctorAuthGuardService]
  },
  {
    path: "create-medicine", component: CreateMedicineComponent, canActivate: [DoctorAuthGuardService]
  },
  {
    path: "update-patient/:id", component: UpdatePatientComponent, canActivate: [DoctorAuthGuardService]
  },
  {
    path: "view-patient/:id", component: ViewPatientComponent, canActivate: [DoctorAuthGuardService]
  },
  {
    path: "update-medicine/:id", component: UpdateMedicineComponent, canActivate: [DoctorAuthGuardService]
  },

  // Login Routes
  {
    path: "doc-login", component: DoctorLoginComponent
  },
  {
    path: "admin-login", component: AdminLoginComponent
  },
  {
    path: "patient-login", component: PatientLoginComponent
  },

  // CuraNet Patient Portal Routes (with layout wrapper)
  {
    path: "", component: PatientLayoutComponent, canActivate: [PatientAuthGuardService],
    children: [
      { path: "patient", component: PatientDashboardComponent },
      { path: "my-appointments", component: PatientAppointmentsComponent },
      { path: "emergency-card", component: EmergencyCardComponent },
      { path: "my-profile", component: PatientProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
