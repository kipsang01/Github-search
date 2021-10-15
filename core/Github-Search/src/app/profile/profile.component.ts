import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.githubService.getUserProfile().subscribe((response:any) => {
      console.log(response)
    })
  }

}
