import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student:Student;
  id:number;
  constructor(private service:StudentService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.student=new Student();
    this.id=this.route.snapshot.params['id'];
    this.service.getStduentById(this.id).subscribe(res=>{
      this.student=res;
    },
    error=>{
      alert("somehting went worng");
    })
 
  }



  
  saveStudent(student:Student){
    this.service.updateStudent(this.student).subscribe(res=>{
      this.student=res;
      this.router.navigate(['viewstudents']);

    })
   
  }
}

