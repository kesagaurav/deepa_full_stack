package com.gaurav.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gaurav.model.Student;
import com.gaurav.service.StudentService;

@RestController
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentService service;

	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student) {
		// TODO Auto-generated method stub
		return service.addStudent(student);
	}

	@PutMapping("/student")
	public Student updateStudent(@RequestBody Student student) {
		// TODO Auto-generated method stub

		return service.updateStudent(student);
	}

	@DeleteMapping("/student/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}

	@GetMapping("/students")
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return service.getAllStudents();
	}
	
	

	@GetMapping("/student/{id}")
	public Student getStduentByid(@PathVariable int id) {
		
		return service.getStduentByid(id);
	}


}
