import { Routes, RouterModule }  from '@angular/router';

import { LockedComponent } from './locked.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LockedComponent
  }
];

export const routing = RouterModule.forChild(routes);
