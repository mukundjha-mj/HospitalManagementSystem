package com.hospital.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hospital.entity.MedicalRecord;
import com.hospital.repository.MedicalRecordRepository;

@RestController
@RequestMapping("/api/records")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicalRecordController {

    @Autowired
    private MedicalRecordRepository medicalRecordRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file,
            @RequestParam("patientName") String patientName) {
        try {
            MedicalRecord record = new MedicalRecord(patientName, file.getOriginalFilename(), file.getContentType(),
                    file.getBytes());
            medicalRecordRepository.save(record);
            return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Could not upload file: " + e.getMessage());
        }
    }

    @GetMapping("/patient/{patientName}")
    public List<MedicalRecord> getRecordsByPatient(@PathVariable String patientName) {
        // ideally return DTO without the big byte array
        List<MedicalRecord> records = medicalRecordRepository.findByPatientName(patientName);
        records.forEach(r -> r.setData(null)); // Don't send file content in list view
        return records;
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
        Optional<MedicalRecord> recordOptional = medicalRecordRepository.findById(id);
        if (recordOptional.isPresent()) {
            MedicalRecord record = recordOptional.get();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + record.getFileName() + "\"")
                    .contentType(MediaType.parseMediaType(record.getFileType()))
                    .body(record.getData());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
