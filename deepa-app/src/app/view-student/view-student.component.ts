import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
   students:Student[];
   message:string;
    student1:Student;
    id:number;
  constructor(private service: StudentService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.service.getAllStudents().subscribe(res=>{
      this.students=res;
    })
    this.service.getStduentById(this.id).subscribe(res=>{
      this.student1=res;
      alert(this.student1);
    })
  }

  public deleteStudent(id:number){
    this.service.deleteStudent(id).subscribe(res=>{
      this.message=`the id is deleted is  ${id}`;
      this.ngOnInit();
      alert(this.message);
    })
    }

    public saveStudent(id:number){
        this.router.navigate(['updatestudent',id]);
    }
      
    
    
  }


