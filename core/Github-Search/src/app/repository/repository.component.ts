import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @Input() repository:any;

  constructor(private http:GithubService) { }

  ngOnInit(): void {
    this.http.getRepos(this.repository).subscribe((response:any) =>{
      console.log(response)
    })
  }

}
