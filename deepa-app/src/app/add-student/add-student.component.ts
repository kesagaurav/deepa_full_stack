import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
    public student:Student;
  constructor(private service:StudentService,private router:Router) {
    this.student=new Student();
   }


      public addStudent():void{
        this.service.addStudent(this.student).subscribe(res=>{
          this.student=new Student();
          this.router.navigate(['/viewstudents']);
        })
      }
}
