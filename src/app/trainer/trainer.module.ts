import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


const routes:Routes=[
  { path: '', redirectTo: 'trainer-list', pathMatch: 'full' },
      { path: 'trainer-form', component: TrainerFormComponent },
      { path: 'trainer-list', component: TrainerListComponent },
      { path: 'view-trainer/:id', component: ViewTrainerComponent },
      { path: 'trainer/edit/:id', component: TrainerFormComponent },
]


@NgModule({
  declarations: [TrainerFormComponent,TrainerListComponent,ViewTrainerComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MatTooltipModule,
    RouterModule.forChild(routes),
  ],
})
export class TrainerModule {}
