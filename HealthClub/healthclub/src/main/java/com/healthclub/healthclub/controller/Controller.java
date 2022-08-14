package com.healthclub.healthclub.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.healthclub.healthclub.services.CRUD_service;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {
	
	@Autowired CRUD_service cs;
	
	
	@GetMapping(value = "/welcome")
	public String welcome() {
		return "Welcome jay";
	}
	
	@PostMapping("/postContact")
	public ResponseEntity<Object> postContact(@RequestBody Map<String,Object> body){
		Map<String, Object> resp=new HashMap<String, Object>();
		try {
			
			resp.put("message", cs.postContact(body));
			resp.put("status", "success");
			
		}catch(Exception e){
			e.printStackTrace();
			resp.put("status", "fail");
			resp.put("message", e.getMessage());
			return new ResponseEntity<Object>(resp,HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Object>(resp,HttpStatus.OK);
	}
	
	@PostMapping("/postAppoint")
	public ResponseEntity<Object> postAppiont(@RequestBody Map<String,Object> body){
		body.put("np", body.get("np").toString().equals("Yes") ? 1 : 0);
		System.out.println("Body :" + body);
		Map<String, Object> resp=new HashMap<String, Object>();
		try {
			
			resp.put("message", cs.postAppointment(body));
			resp.put("status", "success");
			
		}catch(Exception e){
			e.printStackTrace();
			resp.put("status", "fail");
			resp.put("message", e.getMessage());
			return new ResponseEntity<Object>(resp,HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Object>(resp,HttpStatus.OK);
	}
	@GetMapping("/getAllappoint")
	public ResponseEntity<Object> getAppiont(){
		Map<String, Object> resp=new HashMap<String, Object>();
		try {

			resp.put("data", cs.getAppointment());
			resp.put("status", "success");

		}catch(Exception e){
			e.printStackTrace();
			resp.put("status", "fail");
			resp.put("message", e.getMessage());
			return new ResponseEntity<Object>(resp,HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Object>(resp,HttpStatus.OK);
	}

}
