import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  @Input()userProfile:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user = this.userProfile
  }

  getRepos(user:string){
    this.router.navigate(['/profile',user])
  }

}
