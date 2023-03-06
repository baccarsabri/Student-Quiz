import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: 'login', component:GoogleSignInComponent
   
  }, 
  {
    path: 'profil', component:ProfilComponent
   
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
