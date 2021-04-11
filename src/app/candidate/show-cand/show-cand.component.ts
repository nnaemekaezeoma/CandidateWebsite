import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cand',
  templateUrl: './show-cand.component.html',
  styleUrls: ['./show-cand.component.css']
})
export class ShowCandComponent implements OnInit {

  constructor(private service:SharedService) { }

  CandidateList:any=[];

  ModalTitle:string="";
  ActiveAddEditCandComp:boolean=false;
  cand:any;
  recd:string="";

  ngOnInit(): void {
    this.refreshCandList();
  }

addClick(){
  this.cand={
    ID:0,
    FirstName:"",
    SurName:"",
    DateOfBirth:"",
    Address1:"",
    Town:"",
    PostCode:"",
    Country:"",
    PhoneMobile:"",
    PhoneWork:"",
    PhoneHome:""    
  }
  this.ModalTitle="Add Candidate";
  this.ActiveAddEditCandComp=true;
}

editClick(item:any){
  this.cand=item;
  this.cand.recd="edit";
  this.ModalTitle="Edit Candidate";
  this.ActiveAddEditCandComp=true;
}


viewClick(item:any){
  this.cand=item;
  this.cand.recd="view";
  this.ModalTitle="Candidate Details";
  this.ActiveAddEditCandComp=true;
}


closeClick(){
  this.ActiveAddEditCandComp=false;
  this.refreshCandList();
}

refreshCandList(){ 
    this.service.getCandList().subscribe(data=>{
      this.CandidateList=data;
      this.recd="";
    });
}
}
