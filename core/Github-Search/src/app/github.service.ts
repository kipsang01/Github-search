import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getUserProfile(){
     return this.http.get('https://api.github.com/users/kipsang01?&Access_token=' + environment.apiKey)
  }                       
}
