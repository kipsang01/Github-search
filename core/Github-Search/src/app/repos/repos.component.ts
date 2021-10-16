import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userRepos:any;

  @Input()repos:any;

  constructor(githubservice:GithubService) { }

  ngOnInit(): void {
    this.userRepos = this.repos;

  }
  
  //getUserRepos(){}

}
