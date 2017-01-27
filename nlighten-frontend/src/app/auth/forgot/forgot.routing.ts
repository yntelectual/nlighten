import { Routes, RouterModule }  from '@angular/router';

import { ForgotComponent } from './forgot.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ForgotComponent
  }
];

export const routing = RouterModule.forChild(routes);
