import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailsPagePage } from './employee-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDetailsPagePageRoutingModule {}
