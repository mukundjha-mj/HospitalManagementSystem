import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PatientAuthService } from './patient-auth.service';

@Injectable({
    providedIn: 'root'
})
export class PatientAuthGuardService implements CanActivate {

    constructor(private patientAuth: PatientAuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.patientAuth.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/patient-login']);
        return false;
    }
}
