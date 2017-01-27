import { NgModule } from '@angular/core';

import {routing} from "./auth.routes";
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    routing,
  ],
  declarations: [ AuthComponent]
})
export class AuthModule { }
