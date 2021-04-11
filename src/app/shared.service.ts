import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};


@Injectable({
  providedIn: 'root' 
})



export class SharedService {
readonly APIUrl = 'http://localhost:25202/api/';
  constructor(private http:HttpClient) { }


  getCandList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'candidates');
  }

  getCandidate(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'candidates/'+val);
  }

  addCandidate(val:any){
    return this.http.post(this.APIUrl+'candidates', val);
  }

  updateCandidate(val:any, val2:any){
    return this.http.put(this.APIUrl+'candidates/'+val2, val);
  }

  getcandidatesSkills():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'candidates/skills');
  }

  getCandidateSkills(val:any){
    return this.http.get<any>(this.APIUrl+'candidates/'+val+'/skills');
  }

  deleteCandidateSkill(val1:any,val2:any){
   return this.http.delete(this.APIUrl+'candidates/'+val1+'/skills/'+val2);
  }

  addCandidateSkill(val1:any, val2:any){
    return this.http.post(this.APIUrl+'candidates/'+val1+'/skills',val2);
   }

   getSkills():Observable<any[]>{
     return this.http.get<any>(this.APIUrl+'skills')
   }
}
