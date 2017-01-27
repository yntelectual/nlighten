import { AuthData } from './auth-data';
import { LoginType } from './login-type';

export class Credentials {
  username: string;
  password: string;
  loginType: number;
  authData: AuthData;

  constructor(username: string, password: string, loginType: number, authData: AuthData){
    this.username = username;
    this.password = password;
    this.loginType = loginType;
    this.authData = authData;
  }
}
