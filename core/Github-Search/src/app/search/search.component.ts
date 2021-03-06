import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userProfile:any;
  repo:any;
  username!:string;
  repository!:string;

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    
  }
  getUserProfile(){
   // this.searchinput = data;
   //console.log(this.username)
    this.githubService.getUserProfile(this.username).subscribe((response:any) => {
      console.log(response)
      this.userProfile = response;
    })
    
  }
  getRepo(){
    this.githubService.getRepos(this.repository).subscribe((data:any) => {
       console.log(data)
       this.repo = data
     })
  }


}
