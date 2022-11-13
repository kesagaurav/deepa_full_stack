import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
    id:number;
    message:string;
    student:Student;
  constructor(private service:StudentService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
 
  }

  
  //public deleteStudent(id:number){
    //this.service.deleteStudent(id).subscribe(res=>{
      //this.message=`the id is deleted is  ${id}`;
      //this.student=res;
      //this.ngOnInit();
      //alert(this.message);
    //})
    //}

}
