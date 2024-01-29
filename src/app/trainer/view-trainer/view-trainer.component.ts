import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { GymService } from 'src/app/shared/gym.service';


@Component({
  selector: 'app-view-trainer',
  templateUrl: './view-trainer.component.html',
  styleUrls: ['./view-trainer.component.css']
})
export class ViewTrainerComponent implements OnInit {

  constructor(private route:ActivatedRoute , private api:GymService ,  private sanitizer: DomSanitizer) { }

  TrainerData :any;

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      const  trainerId = params['id'];
      
      this.getTrainerById(trainerId);

    }) 


  }

getTrainerById(id:number){
  this.api.getTrainerById(id).subscribe(res=>{
    this.TrainerData = res;
    console.log("Trainer Data",this.TrainerData);

    console.log("Image Before Sanitization:", this.TrainerData.image);

    this.TrainerData.image = this.sanitizer.bypassSecurityTrustUrl(this.TrainerData.image) as SafeUrl;

    // Check the value after sanitization
    console.log("Image After Sanitization:", this.TrainerData.image);    
  })
}

}
