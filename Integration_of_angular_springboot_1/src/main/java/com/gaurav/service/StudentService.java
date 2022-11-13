package com.gaurav.service;

import java.util.List;

import com.gaurav.model.Student;

public interface StudentService {

	Student addStudent(Student student);
	Student updateStudent(Student student);
	void delete(int id);
	Student getStduentByid(int id);
	List<Student> getAllStudents();
}
