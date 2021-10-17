import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [  
  { path:'profile', component: ProfileComponent},
  { path: 'profile/:username', component: ReposComponent},
 // { path:'',  redirectTo:"/profile", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
