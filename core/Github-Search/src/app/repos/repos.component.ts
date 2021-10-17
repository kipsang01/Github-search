import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userRepos!:any[]
 // user!:string;

  //@Input()repos:any;

  constructor(private route:ActivatedRoute,private githubservice:GithubService) { }

  ngOnInit(): void {
     let user = this.route.snapshot.paramMap.get('user');
   this.userRepos = this.githubservice.getUserRepos(user)

  }
  
  //getUserRepos(){}

}
