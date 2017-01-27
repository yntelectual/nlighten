import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';
import { OverlayLayoutComponent } from './app-layouts/overlay-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import { MainMenuComponent } from './menu/main-menu.component';
import { LoginComponent, RegisterComponent } from '../auth/';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    OverlayLayoutComponent,
    EmptyLayoutComponent,
    MainMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
  ]
})
export class NlightenLayoutModule{

}
