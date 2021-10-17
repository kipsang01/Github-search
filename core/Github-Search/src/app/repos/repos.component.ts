import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userRepos!:any[]
  newRepo!:Repos
 // user!:string;

  //@Input()repos:any;

  constructor(private route:ActivatedRoute,private githubservice:GithubService) { }

  ngOnInit(): void {
    let user = this.route.snapshot.paramMap.get('username');
    console.log(user)
    this.githubservice.getUserRepos(user).subscribe((response:any) => {
    this.userRepos = response;
    console.log(this.userRepos)
   // this.newRepo = new Repos(data.name,data.language,data.forks,data.html_url);
   // this.userRepos.push(this.newRepo)
  })

  }
  
  //getUserRepos(){}

}
