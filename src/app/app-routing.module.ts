import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-employee-page',
    loadChildren: () => import('./add-employee-page/add-employee-page.module').then( m => m.AddEmployeePagePageModule)
  },
  {
    path: 'employee-details-page',
    loadChildren: () => import('./employee-details-page/employee-details-page.module').then( m => m.EmployeeDetailsPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
