import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CandidateComponent} from './candidate/candidate.component';
import {SkillComponent} from './skill/skill.component';

const routes: Routes = [
  {path: 'candidate',component:CandidateComponent},
  {path: 'skill',component:SkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
