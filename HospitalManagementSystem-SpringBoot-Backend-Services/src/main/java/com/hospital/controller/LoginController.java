package com.hospital.controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.entity.Admin;
import com.hospital.entity.Doctor;
import com.hospital.repository.AdminRepository;
import com.hospital.repository.DoctorRepository;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private com.hospital.config.JwtUtils jwtUtils;

	@PostMapping("/admin")
	public ResponseEntity<Map<String, String>> loginAdmin(@RequestBody Admin adminData) {
		String username = adminData.getUsername().trim();
		String password = adminData.getPassword().trim();
		
		System.out.println("Login Request for Admin: '" + username + "'");
		System.out.println("Password provided (trimmed): '" + password + "'");
		
		Admin admin = adminRepository.findByUsername(username);
		Map<String, String> response = new HashMap<>();
		
		if (admin == null) {
			System.out.println("Admin not found in database for username: " + username);
			response.put("status", "error");
			response.put("message", "User not found");
			return ResponseEntity.status(401).body(response);
		}

		System.out.println("Admin found in DB. Stored password: '" + admin.getPassword() + "'");

		if (admin.getPassword().equals(password)) {
			System.out.println("Password MATCHES!");
			String token = jwtUtils.generateToken(admin.getUsername());
			response.put("status", "success");
			response.put("message", "Login successful");
			response.put("token", token);
			return ResponseEntity.ok(response);
		} else {
			System.out.println("Password DOES NOT MATCH.");
			response.put("status", "error");
			response.put("message", "Invalid credentials");
			return ResponseEntity.status(401).body(response);
		}
	}

	// Temporary debug endpoint to create/update admin user manually
	@org.springframework.web.bind.annotation.GetMapping("/create-admin")
	public ResponseEntity<String> createAdmin() {
		Admin admin = adminRepository.findByUsername("admin");
		if (admin == null) {
			admin = new Admin();
			admin.setUsername("admin");
		}
		admin.setPassword("admin123");
		adminRepository.save(admin);
		return ResponseEntity.ok("Admin 'admin' updated with password: 'admin123'");
	}

	@PostMapping("/doctor")
	public ResponseEntity<Map<String, String>> loginDoctor(@RequestBody Doctor doctorData) {
		String username = doctorData.getUsername().trim();
		String password = doctorData.getPassword().trim();
		
		System.out.println("Login Request for Doctor: '" + username + "'");
		System.out.println("Password provided (trimmed): '" + password + "'");
		
		Doctor doctor = doctorRepository.findByUsername(username);
		Map<String, String> response = new HashMap<>();

		if (doctor == null) {
			System.out.println("Doctor not found in database for username: " + username);
			response.put("status", "error");
			response.put("message", "User not found");
			return ResponseEntity.status(401).body(response);
		}

		System.out.println("Doctor found in DB. Stored password: '" + doctor.getPassword() + "'");

		if (doctor.getPassword().equals(password)) {
			System.out.println("Password MATCHES!");
			String token = jwtUtils.generateToken(doctor.getUsername());
			response.put("status", "success");
			response.put("message", "Login successful");
			response.put("token", token);
			return ResponseEntity.ok(response);
		} else {
			System.out.println("Password DOES NOT MATCH.");
			response.put("status", "error");
			response.put("message", "Invalid credentials");
			return ResponseEntity.status(401).body(response);
		}
	}

	// Temporary debug endpoint to create/update doctor user manually
	@org.springframework.web.bind.annotation.GetMapping("/create-doctor")
	public ResponseEntity<String> createDoctor() {
		Doctor doctor = doctorRepository.findByUsername("mukund");
		if (doctor == null) {
			doctor = new Doctor();
			doctor.setUsername("mukund");
		}
		doctor.setPassword("Mukund@3208");
		doctorRepository.save(doctor);
		return ResponseEntity.ok("Doctor mukund updated with password: Mukund@3208");
	}
}
