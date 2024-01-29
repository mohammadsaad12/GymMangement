import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GymService } from 'src/app/shared/gym.service';


@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {

  mData :any;

  constructor(private route:ActivatedRoute , private api:GymService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const memberId = params['id'];
      if(memberId){
        this.getMemberById(memberId);
      }
    })
  }

  getMemberById(id:number){
    this.api.getMemberById(id).subscribe(res=>{
         this.mData = res;
         console.log("GetById", this.mData);
         
    })
  }

}
