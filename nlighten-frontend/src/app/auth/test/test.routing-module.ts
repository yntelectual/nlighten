import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { TestComponent } from './test.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class TestRoutingModule { }
