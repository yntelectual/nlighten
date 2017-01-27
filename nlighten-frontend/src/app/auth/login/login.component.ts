import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { Credentials } from '../models/credentials';
import { Profile } from '../models/profile';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './login.css' ],
  templateUrl: './login.html',
})
export class LoginComponent {
  public displayLogin:boolean = false;
  public displaySignUp:boolean = false;

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  private loginError:boolean = false;

  constructor(fb:FormBuilder, private authService: AuthService, private router: Router) {
    this.authService = authService;
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.authService.login(values as Credentials)
        .then(data => this.resolveLogin(data))
        .catch(error => this.loginError = true);

    }
  }

  public resolveLogin(data: Profile){
    if (data){
      if (this.authService.getRedirectUrl){
        this.router.navigate([this.authService.getRedirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  public toggleLogin(){
    this.displayLogin = !this.displayLogin;
  }

  public toggleSignUp(){
    this.displaySignUp = !this.displaySignUp;
  }

  public facebookLogin(){
    this.authService.facebookLoginPopup();
  }

  public googleLogin(){
    this.authService.googleLoginPopup();
  }
}
