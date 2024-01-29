import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/trainer/trainer-list', pathMatch: 'full' },
  
  {
    path: 'trainer',
    loadChildren: () =>
      import('./trainer/trainer.module').then((m) => m.TrainerModule),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('./member/member.module').then((m) => m.MemberModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
