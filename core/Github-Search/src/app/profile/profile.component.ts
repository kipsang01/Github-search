import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  @Input()userProfile:any;

  constructor() { }

  ngOnInit(): void {
    this.user = this.userProfile
  }

}
