import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit {
  public displayLogin:boolean = false;
  public displaySignUp:boolean = false;
  public displayForgot:boolean = false;

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {

  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public showLogin(){
    this.hideAuth();
    this.displayLogin = true;
  }

  public showSignUp(){
    this.hideAuth();
    this.displaySignUp = true;
  }

  public showForgot(){
    this.hideAuth();
    this.displaySignUp = true;
  }

  public hideAuth() {
    this.displayLogin = false;
    this.displaySignUp = false;
    this.displayForgot = false;
  }

}
