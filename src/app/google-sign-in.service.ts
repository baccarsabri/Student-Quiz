import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {

  
  private clientId = '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com';

  init() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: this.clientId,
        
      });
    });
  }

  signIn(): Promise<any> {
    return new Promise((resolve, reject) => {
      gapi.auth2.getAuthInstance().signIn({
        scope: 'https://www.googleapis.com/auth/userinfo.profile'
      }).then(
        (googleUser: any) => {
          const profile = googleUser.getBasicProfile();
          const user = {
            email: profile.getEmail(),
            name: profile.getName(),
            photoUrl: profile.getImageUrl(),
            birthdate: profile
          };
          resolve(user);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

}
