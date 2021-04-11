import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-skill',
  templateUrl: './show-skill.component.html',
  styleUrls: ['./show-skill.component.css']
})
export class ShowSkillComponent implements OnInit {

  constructor(private service:SharedService) { }

  CandidateList:any=[];
  CandidateSkillsList:any=[];

  ModalTitle:string="";
  ActiveAddCandSkillComp:boolean=false;
  CandItem:any;
  
  ngOnInit(): void {
    this.refreshCandList();
    var cand ={
      ID: 1
    }
    this.fetchCandSkillList();
  }

addClick(){
  this.CandItem={
  //  ID: this.ID,
   // Name:
    //SkillID:0,
    SkillName:""
   
  }
  this.ModalTitle="Add New Candidate Skills";
  this.ActiveAddCandSkillComp=true;
}

deleteClick(item:any){
if(confirm("Are you sure you want to Delete candidate Skill?")){
  this.service.deleteCandidateSkill(1, item.ID).subscribe(data=>{
   alert(data.toString());
   this.fetchCandSkillList();
  }
  );
}
}

closeClick(){
  this.ActiveAddCandSkillComp=false;
  this.fetchCandSkillList();
}

refreshCandList(){ 
    this.service.getCandList().subscribe(data=>{
      this.CandidateList=data;
    });
}

fetchCandSkillList(){ 
  alert("I got here");
}

submit(){ 
  alert();
}

}
