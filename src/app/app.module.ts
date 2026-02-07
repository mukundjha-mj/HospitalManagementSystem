import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { EmergencyCardComponent } from './components/emergency-card/emergency-card.component';
import { PatientAppointmentsComponent } from './components/patient-appointments/patient-appointments.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientLayoutComponent } from './components/patient-layout/patient-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomePageComponent,
    DocDashbordComponent,
    CreatePatientComponent,
    MedicineListComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DoctorLoginComponent,
    AdminLoginComponent,
    PatientLoginComponent,
    PatientDashboardComponent,
    EmergencyCardComponent,
    PatientAppointmentsComponent,
    PatientProfileComponent,
    PatientLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
