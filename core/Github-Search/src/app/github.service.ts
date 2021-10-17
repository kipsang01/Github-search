import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface repoInterface{
  name:string;
  language:string;
  forks:number;
  link:string;
}


@Injectable({
  providedIn: 'root'
})


export class GithubService {
  apiKey = environment.apiKey


  constructor(private http:HttpClient) { }

  
  getUserProfile(username:string){
     return this.http.get(`https://api.github.com/users/${username}?Access_token:${this.apiKey}`)
  }   
  getUserRepos(username:any){
      return this.http.get(`https://api.github.com/users/${username}/repos?Access_token:${this.apiKey}`)
  }                    
}
