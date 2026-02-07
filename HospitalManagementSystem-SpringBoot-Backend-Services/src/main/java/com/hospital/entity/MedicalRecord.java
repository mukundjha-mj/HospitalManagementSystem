package com.hospital.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Lob;
import java.util.Date;

@Entity
@Table(name = "medical_records")
public class MedicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String patientName;
    private String fileName;
    private String fileType;
    
    @Lob
    private byte[] data; // Storing file content in DB for simplicity, can move to disk later
    
    private Date uploadDate;

    public MedicalRecord() {}

    public MedicalRecord(String patientName, String fileName, String fileType, byte[] data) {
        this.patientName = patientName;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.uploadDate = new Date();
    }

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }
    public String getPatientName() { return patientName; }
    public void setPatientName(String patientName) { this.patientName = patientName; }
    public String getFileName() { return fileName; }
    public void setFileName(String fileName) { this.fileName = fileName; }
    public String getFileType() { return fileType; }
    public void setFileType(String fileType) { this.fileType = fileType; }
    public byte[] getData() { return data; }
    public void setData(byte[] data) { this.data = data; }
    public Date getUploadDate() { return uploadDate; }
    public void setUploadDate(Date uploadDate) { this.uploadDate = uploadDate; }
}
