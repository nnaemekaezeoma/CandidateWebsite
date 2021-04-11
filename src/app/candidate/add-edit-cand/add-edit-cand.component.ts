import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cand',
  templateUrl: './add-edit-cand.component.html',
  styleUrls: ['./add-edit-cand.component.css']
})
export class AddEditCandComponent implements OnInit {

  constructor(private service:SharedService) { }

@Input() cand:any;
ID:string="";
FirstName:string="";
SurName:string="";
DateOfBirth:string="";
Address1:string="";
Town:string="";
PostCode:string="";
Country:string="";
PhoneMobile:string="";
PhoneWork:string="";
PhoneHome:string="";
recd:string="";

  ngOnInit(): void {
    this.recd = this.cand.recd;
    this.ID = this.cand.ID;
    this.FirstName= this.cand.FirstName;
    this.SurName= this.cand.SurName;
    this.DateOfBirth= this.cand.DateOfBirth.toString();
    this.Address1= this.cand.Address1;
    this.Town= this.cand.Town;
    this.PostCode= this.cand.PostCode;
    this.Country= this.cand.Country;
    this.PhoneMobile= this.cand.PhoneMobile;
    this.PhoneWork= this.cand.PhoneWork;
    this.PhoneHome= this.cand.PhoneHome;
  }

  addCandidate(){
    var val = {ID: this.ID,
      FirstName: this.FirstName,
      SurName: this.SurName,
      DateOfBirth: this.DateOfBirth,
      Address1: this.Address1,
      Town: this.Town,
      Country: this.Country,
      PostCode: this.PostCode,
      PhoneHome: this.PhoneHome,
      PhoneMobile: this.PhoneMobile,
      PhoneWork: this.PhoneWork};

      this.service.addCandidate(val).subscribe(res=>{
        alert("Request Successful");
      });
  }

  updateCandidate(){
    var val = {
      FirstName: this.FirstName,
      SurName: this.SurName,
      DateOfBirth: this.DateOfBirth,
      Address1: this.Address1,
      Town: this.Town,
      Country: this.Country,
      PostCode: this.PostCode,
      PhoneHome: this.PhoneHome,
      PhoneMobile: this.PhoneMobile,
      PhoneWork: this.PhoneWork};

      var val2 = this.ID
      this.service.updateCandidate(val, val2).subscribe(res=>{
        alert("Request Successful");
      });
  }

}
