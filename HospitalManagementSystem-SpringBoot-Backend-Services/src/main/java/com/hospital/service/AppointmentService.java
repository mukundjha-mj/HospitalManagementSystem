package com.hospital.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import com.hospital.entity.Appointment;
import com.hospital.repository.AppointmentRepository;

@Service
public class AppointmentService {

	private AppointmentRepository appointmentRepository;

	public AppointmentService(AppointmentRepository appointmentRepository) {
		super();
		this.appointmentRepository = appointmentRepository;
	}
	
	public Appointment createAppointment(Appointment appointment) {
		if (appointmentRepository.existsByDateAndTime(appointment.getDate(), appointment.getTime())) {
			throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.CONFLICT, "Appointment slot already taken!");
		}
		return appointmentRepository.save(appointment);
	}
	
	public List<Appointment> showAllAppointments(){
		return appointmentRepository.findAll();
	}
	
	public ResponseEntity<Map<String, Boolean>> deleteAppointment(int id) throws AttributeNotFoundException{
		
		Appointment appointment = appointmentRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Appointment not found with id : "+id));
		
		appointmentRepository.delete(appointment);
		
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
		
	}
	
}
