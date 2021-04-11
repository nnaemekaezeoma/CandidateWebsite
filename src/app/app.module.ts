import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ShowCandComponent } from './candidate/show-cand/show-cand.component';
import { AddEditCandComponent } from './candidate/add-edit-cand/add-edit-cand.component';
import { SkillComponent } from './skill/skill.component';
import { ShowSkillComponent } from './skill/show-skill/show-skill.component';
import { AddRemoveSkillComponent } from './skill/add-remove-skill/add-remove-skill.component';
import {SharedService} from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    ShowCandComponent,
    AddEditCandComponent,
    SkillComponent,
    ShowSkillComponent,
    AddRemoveSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
