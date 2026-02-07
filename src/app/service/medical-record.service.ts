import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalRecord } from '../model/medical-record';

@Injectable({
    providedIn: 'root'
})
export class MedicalRecordService {

    private baseUrl = 'http://localhost:9090/api/records';

    constructor(private http: HttpClient) { }

    uploadFile(file: File, patientName: string): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('patientName', patientName);

        return this.http.post(`${this.baseUrl}/upload`, formData, { responseType: 'text' });
    }

    getRecordsByPatient(patientName: string): Observable<MedicalRecord[]> {
        return this.http.get<MedicalRecord[]>(`${this.baseUrl}/patient/${patientName}`);
    }

    downloadFile(id: number): Observable<Blob> {
        return this.http.get(`${this.baseUrl}/download/${id}`, { responseType: 'blob' });
    }
}
