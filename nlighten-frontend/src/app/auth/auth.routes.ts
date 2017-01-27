import {Routes, RouterModule} from "@angular/router";

import { AuthGuard } from '../shared/guards/auth-guard.guard';
import { LoggedInGuard } from '../shared/guards/logged-in-guard.guard';

export const routes:Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: ()=> System.import('./login/login.module').then((m)=>m.LoginModule),
    canActivate: [ LoggedInGuard ],
  },
  {
    path: 'forgot-password',
    loadChildren: ()=> System.import('./forgot/forgot.module').then((m)=>m.ForgotModule),
    canActivate: [ LoggedInGuard ],
  },
  {
    path: 'register',
    loadChildren: ()=> System.import('./register/register.module').then((m)=>m.RegisterModule),
    canActivate: [ LoggedInGuard ],
  },
  {
    path: 'locked',
    loadChildren: ()=> System.import('./locked/locked.module').then((m)=>m.LockedModule),
    canActivate: [ LoggedInGuard ],
  },
];

export const routing = RouterModule.forChild(routes);
