import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GymService } from 'src/app/shared/gym.service';

GymService;

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css'],
})
export class TrainerFormComponent implements OnInit {
  isEdit: boolean = false;

  Tid: any;

  trainerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl(''),
    dob: new FormControl(''),
    JoiningDate: new FormControl(''),
    expertise: new FormControl(''),
    experience: new FormControl(''),
    testimonial: new FormControl(''),
    certification: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(
    private api: GymService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const trainerId = params['id'];
      if (trainerId) {
        this.isEdit = true; // Set isEdit to true when editing
        // Fetch trainer data by ID and populate the form for editing
        this.Tid = trainerId;
        this.getTrainerById(trainerId);
      }
    });
  }

  getTrainerById(id: any) {
    this.api.getTrainerById(id).subscribe((res) => {
      // Populate the form with the fetched data
      this.trainerForm.patchValue(res);
    });
  }

  saveTrainer() {
    if (this.isEdit) {
      // If it's an edit operation, update the existing trainer
      this.updateTrainer();
    } else {
      // If it's not an edit operation, add a new trainer
      this.addNewTrainer();
    }
  }

  updateTrainer() {
    const updatedTrainerObj = {
      id: this.Tid, // Parse the id to ensure it's a number
      name: this.trainerForm.value.name,
      email: this.trainerForm.value.email,
      mobile: this.trainerForm.value.mobile,
      dob: this.trainerForm.value.dob,
      JoiningDate: this.trainerForm.value.JoiningDate,
      expertise: this.trainerForm.value.expertise,
      experience: this.trainerForm.value.experience,
      testimonial: this.trainerForm.value.testimonial,
      certification: this.trainerForm.value.certification,
      image: this.trainerForm.value.image,
    };

    console.log('Updated Trainer Object:', updatedTrainerObj);

    this.api.updateTrainer(updatedTrainerObj.id, updatedTrainerObj).subscribe(
      (res) => {
        alert('Trainer Updated Successfully');
        console.log(res);
        this.router.navigate(['/trainer/trainer-list']);
      },
      (err) => {
        alert('Something went wrong while updating');
      }
    );
  }

  addNewTrainer() {
    const newTrainerObj = {
      name: this.trainerForm.value.name,
      email: this.trainerForm.value.email,
      mobile: this.trainerForm.value.mobile,
      dob: this.trainerForm.value.dob,
      JoiningDate: this.trainerForm.value.JoiningDate,
      expertise: this.trainerForm.value.expertise,
      experience: this.trainerForm.value.experience,
      testimonial: this.trainerForm.value.testimonial,
      certification: this.trainerForm.value.certification,
      image: this.trainerForm.value.image,

    };

    this.api.postTrainer(newTrainerObj).subscribe(
      (res) => {
        alert('Trainer Added Successfully');
        console.log(res);
        this.router.navigate(['/trainer/trainer-list']);
      },
      (err) => {
        alert('Something went wrong while adding');
      }
    );
  }

  // addTrainer() {
  //   const newTrainerObj = {
  //     name: this.trainerForm.value.name,
  //     email: this.trainerForm.value.email,
  //     mobile: this.trainerForm.value.mobile,
  //     dob: this.trainerForm.value.dob,
  //     JoiningDate: this.trainerForm.value.JoiningDate,
  //     expertise: this.trainerForm.value.expertise,
  //     experience: this.trainerForm.value.experience,
  //     testimonial: this.trainerForm.value.testimonial,
  //     certification: this.trainerForm.value.certification,
  //   };

  //   this.api.postTrainer(newTrainerObj).subscribe((res) => {
  //     alert('Trainer Added Successfully ');
  //     console.log(res);
  //     this.trainerForm.reset();
  //     this.router.navigate(["/trainer/trainer-list"])

  //   },err=>{
  //     alert("Something went wrong while adding")
  //   });
  // }
}
