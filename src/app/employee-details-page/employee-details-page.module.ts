import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDetailsPagePageRoutingModule } from './employee-details-page-routing.module';

import { EmployeeDetailsPagePage } from './employee-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeDetailsPagePageRoutingModule
  ],
  declarations: [EmployeeDetailsPagePage]
})
export class EmployeeDetailsPagePageModule {}
