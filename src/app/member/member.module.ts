import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MemberFormComponent,MemberListComponent,ViewMemberComponent],
  imports: [
    CommonModule,ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'member-list', pathMatch: 'full' },
      { path: 'member-form', component: MemberFormComponent },
      { path: 'edit-form/:id', component: MemberFormComponent },
      { path: 'member-list', component: MemberListComponent },

      { path: 'view-member/:id', component: ViewMemberComponent },
    ]),
  ],
})
export class MemberModule {}
