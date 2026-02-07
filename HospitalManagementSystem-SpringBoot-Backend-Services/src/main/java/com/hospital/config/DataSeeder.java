package com.hospital.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import com.hospital.entity.Admin;
import com.hospital.entity.Doctor;
import com.hospital.repository.AdminRepository;
import com.hospital.repository.DoctorRepository;

@Component
public class DataSeeder implements CommandLineRunner {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private DoctorRepository doctorRepository;

	@Override
	public void run(String... args) throws Exception {
		// Seed Admin
		if (adminRepository.count() == 0) {
			Admin admin = new Admin();
			admin.setUsername("mukund");
			admin.setPassword("mukund@3208");
			adminRepository.save(admin);
			System.out.println("Default Admin created: mukund");
		}

		// Seed Doctor
		if (doctorRepository.count() == 0) {
			Doctor doctor = new Doctor();
			doctor.setUsername("mukund");
			doctor.setPassword("Mukund@3208");
			doctorRepository.save(doctor);
			System.out.println("Default Doctor created: mukund");
		}
	}
}
