import { Injectable } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Profile } from './models/profile';
import { Credentials } from './models/credentials';
import { LoginType } from './models/login-type';

import * as hello from 'hellojs';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private authUrl: string = 'api/auth/login';
  private logoutUrl: string = 'api/auth/logout';
  private profileUrl: string = 'api/auth/profile';

  isLoggedIn: boolean;
  loginType: LoginType;
  authData: any;
  profileData: Profile;

  constructor(private http: Http, private appRef: ApplicationRef) {
    this.isLoggedIn = false;
    // check facebook login
    let helloOptions: HelloJSLoginOptions = {
      scope: 'email',
      redirect_uri: '/auth/login',
    };
    this.helloInit(helloOptions);
    // check native login
  }

  login(input: Credentials): Promise<Profile> {
    return this.http.put(this.authUrl, JSON.stringify(input), {headers: this.headers})
    .toPromise()
    .then(response => response.json().data as Profile)
    .catch(this.handleError);
  }

  logout(): Promise<string> {
    this.isLoggedIn = false;
    return this.http
      .post(this.logoutUrl, JSON.stringify({username: this.profileData.username}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  /*
  loadProfile(): Promise<Profile> {
    return this.http.get(this.profileUrl)
    .toPromise()
    .then(response => {
      this.processLoadProfile(response);
    })
    .catch(this.handleError);
  }
  */

  processLoadProfile(response: any): Profile {
      if (response != undefined){
        return response.json().data as Profile;
      }
      return new Profile('undefined');
  }

  getRedirectUrl(): string {
    return JSON.parse(localStorage.getItem("redirectUrl"));
  }

  setRedirectUrl(url: string) {
    localStorage.setItem("redirectUrl", JSON.stringify(url));
  }

  helloInit(helloOptions: HelloJSLoginOptions): void {
    alert('init');

    hello.init({
      facebook: '1635286220100692',
      //windows: WINDOWS_CLIENT_ID,
      google: '442293765545-7mau4vla268gvrubgfuukmsarfejgj7p.apps.googleusercontent.com'
    }, helloOptions);
  }

  facebookLoginPopup() : void {
    hello('facebook').login(response => {
      this.authHelloCallback(response);
    });
  }

  googleLoginPopup() : void {
    hello('google').login(response => {
      this.authHelloCallback(response);
    });
  }

  authHelloCallback(response: any) {
    alert(JSON.stringify(response));
    if (response != undefined && response.authResponse != undefined && response.error === undefined){
      this.isLoggedIn = true;
      this.loginType = LoginType.FACEBOOK;
      this.authData = response.authResponse;
      // TODO :: uncomment
      //this.loadProfile().then(data => this.profileData = data);
      this.appRef.tick();
      console.log('logged in to facebook: ' + this.isLoggedIn + ' ' + this.loginType);
    } else {
      console.log('logged in to facebook: ' + this.isLoggedIn);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
