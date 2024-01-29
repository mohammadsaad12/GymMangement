import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from 'src/app/shared/gym.service';


@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  TrainerData: any;

  constructor(private api: GymService, private router:Router) {}

  ngOnInit(): void {
    this.getAllTrainer();
  }

  getAllTrainer() {
    this.api.getAllTrainer().subscribe((res) => {
      // console.log('Data',res);
      this.TrainerData = res;
      console.log('TrainerData', this.TrainerData);
    });
  }

  deleteTrainer(row:any){
       this.api.deleteTrainer(row.id).subscribe(res=>{
        alert("Trainer: "+ row.name +" Data Deleted Successfully ");
        this.getAllTrainer();
       })
  }

  editTrainer(row: any) {
    // Navigate to the trainer form with the trainer's data
    this.router.navigate(['/trainer/edit', row.id]);
  }

  viewTrainer(row:any){
    this.router.navigate(['/trainer/view-trainer',row.id])
  }





}
