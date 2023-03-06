import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleSignInService } from '../google-sign-in.service';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls:['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements OnInit {

 constructor(private googleSignInService: GoogleSignInService , private router:Router) { }

  ngOnInit() {
    this.googleSignInService.init();
  }

  onSignIn() {
    console.log('user');
    this.googleSignInService.signIn().then(
      (user: any) => {
     
        localStorage.setItem('user',JSON.stringify(user));
        this.router.navigate(['/profil'])
      })
      
  }

}
