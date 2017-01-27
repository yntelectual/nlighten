import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

import {NlightenLayoutModule} from "./shared/layout/layout.module";
import { AuthGuard } from "./shared/guards/auth-guard.guard";
import { LoggedInGuard } from './shared/guards/logged-in-guard.guard';
import { AuthService } from "./shared/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NlightenLayoutModule,
  ],
  providers: [
    AuthGuard,
    LoggedInGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
