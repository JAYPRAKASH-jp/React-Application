package com.healthclub.healthclub.services;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.healthclub.healthclub.models.Appointments;
import com.healthclub.healthclub.models.ContactInfo;
import com.healthclub.healthclub.repo.AppointmentsRepo;
import com.healthclub.healthclub.repo.ContactIndoRepo;

@Service
public class CRUD_service {
	
	@Autowired AppointmentsRepo appointmentsRepol;
	@Autowired ContactIndoRepo contactIndoRepo;
	
	@Transactional
	public String postAppointment(Map<String,Object> body) {
		ObjectMapper om=new ObjectMapper();
		Appointments obj=om.convertValue(body, Appointments.class);
		
		List<Integer> data=appointmentsRepol.getIdByPhone(obj.getPhone());
		if(data.size()<1) {
			appointmentsRepol.save(obj);	
			return "Data inserted successfully";
		}
		return "Data present";
		
		
	}
	@Transactional
	public String postContact(Map<String,Object> body) {
		ObjectMapper om=new ObjectMapper();
		ContactInfo obj=om.convertValue(body, ContactInfo.class);
		
		List<Integer> data=contactIndoRepo.getIdByPhone(obj.getPhone());
		if(data.size()<1) {
			contactIndoRepo.save(obj);	
			return "Data inserted successfully";
		}
		return "Data present";
	
	}
	@Transactional
	public List<Appointments> getAppointment() {
		return appointmentsRepol.findAll();
		
	}

}
