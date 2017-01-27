import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../validators';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register.css'],
  templateUrl: './register.html',
})
export class RegisterComponent {
  @Input() display:boolean = false;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() toLogin: EventEmitter<any> = new EventEmitter();

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;

  public submitted:boolean = false;

  constructor(fb:FormBuilder) {

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'repeatPassword': ['', Validators.compose([Validators.required, EqualPasswordsValidator.validate('password', 'repeatPassword')])],
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.repeatPassword = this.form.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      console.log("register valid");
    } else {
      console.log("register invalid");
    }
  }

  public login(){
    this.toLogin.emit(null);
  }

  public hide() {
    this.close.emit(null);
  }
}
