import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GymService } from 'src/app/shared/gym.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  constructor(
    private api: GymService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isEdit: boolean = false;
  Mid: any;
  Trainers: any;
  trainerArray: any;
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  memberForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    duration: new FormControl(''),
    mtype: new FormControl(''),
    weight: new FormControl(''),
    trainer: new FormControl(''),
    group: new FormControl(''),
    startDate: new FormControl(''),
    goals: new FormControl(''),
    paymentmethod: new FormControl(''),
    paymentduration: new FormControl(''),
    paymentstatus: new FormControl(''),
    isActive: new FormControl(''),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const memberId = params['id'];
      if (memberId) {
        this.isEdit = true;
        this.Mid = memberId;
        this.getMemberById(memberId);
      }
    });

    this.getAllTrainers();
  }

  getMemberById(id: number) {
    this.api.getMemberById(id).subscribe((res) => {
      this.memberForm.patchValue(res);
    });
  }

  saveMember() {
    if (this.isEdit) {
      this.updateMember();
    } else {
      this.addNewMember();
    }
  }

  addNewMember() {
    console.log(this.memberForm.value);

    const newMemberObj = {
      fname: this.memberForm.value.fname,
      lname: this.memberForm.value.lname,
      email: this.memberForm.value.email,
      mobile: this.memberForm.value.mobile,
      dob: this.memberForm.value.dob,
      duration: this.memberForm.value.duration,
      mtype: this.memberForm.value.mtype,
      weight: this.memberForm.value.weight,
      trainer: this.memberForm.value.trainer,
      startDate: this.memberForm.value.startDate,
      group: this.memberForm.value.group,
      goals: this.memberForm.value.goals,
      paymentmethod: this.memberForm.value.paymentmethod,
      paymentduration: this.memberForm.value.paymentduration,
      paymentstatus: this.memberForm.value.paymentstatus,
      isActive: this.memberForm.value.isActive,
    };

    this.api.postMember(newMemberObj).subscribe(
      (res) => {
        alert('Member Added Successfully');
        console.log(res);
        this.memberForm.reset();
        this.router.navigate(['/member/member-list']);
      },
      (err) => {
        alert('Something error while adding member');
      }
    );
  }

  updateMember() {
    const updateMemberObj = {
      id: this.Mid,
      fname: this.memberForm.value.fname,
      lname: this.memberForm.value.lname,
      email: this.memberForm.value.email,
      mobile: this.memberForm.value.mobile,
      dob: this.memberForm.value.dob,
      duration: this.memberForm.value.duration,
      mtype: this.memberForm.value.mtype,
      weight: this.memberForm.value.weight,
      trainer: this.memberForm.value.trainer,
      startDate: this.memberForm.value.startDate,
      group: this.memberForm.value.group,
      goals: this.memberForm.value.goals,
      paymentmethod: this.memberForm.value.paymentmethod,
      paymentduration: this.memberForm.value.paymentduration,
      paymentstatus: this.memberForm.value.paymentstatus,
      isActive: this.memberForm.value.isActive,
    };

    this.api.updateMember(updateMemberObj.id, updateMemberObj).subscribe(
      (res) => {
        alert('Data Updated Successfully');
        this.router.navigate(['/member/member-list']);
      },
      (err) => {
        alert('something went error while updating');
      }
    );
  }

  getAllTrainers() {
    this.api.getAllTrainer().subscribe((res) => {
      // console.log('response', res);

      this.Trainers = res;
      const trainerNames = [];
      for (const trainer of this.Trainers) {
        trainerNames.push(trainer.name);
      }

      this.trainerArray = trainerNames;
      console.log('names', this.trainerArray);
    });
  }
}
