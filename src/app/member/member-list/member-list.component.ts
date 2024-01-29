import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from 'src/app/shared/gym.service';



@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  memberData : any;

  constructor(private api:GymService ,private router:Router) { }

  ngOnInit(): void {
    this.getAllMember();
  }

  getAllMember(){
    this.api.getAllMembers().subscribe(res =>{
         this.memberData = res;
         console.log(this.memberData);
             
    },err=>{
      console.log("Something went error while getting data");
      
    })
  }

  editMember(row:any){

    this.router.navigate(["/member/edit-form" , row.id])
  }

  deleteMember(row:any){
    this.api.deleteMember(row.id).subscribe(res =>{
      alert("Member Data Deleted Successfully "+ " /n "+ res.name);
      this.getAllMember();
    },err=>{
      alert("Spmething went wrong while deleting member")
    })

  }

  viewMember(row:any){
    // this.router.navigate(['/trainer/view-trainer',])
console.log(row.id);
    
    this.router.navigate(["/member/view-member" , row.id])

  }



}
