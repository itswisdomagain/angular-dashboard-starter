import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { Page1Component } from '../../pages/page1/page1.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // create default route to dashboard
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Actions',
          urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Actions'}]
        }
      },
      { path: 'page1', component: Page1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
