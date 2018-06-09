import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './lazy-loaded-sections/dashboard-layout/dashboard-layout.module#DashboardLayoutModule' },
  { path: 'lost', loadChildren: './lazy-loaded-sections/lost/lost.module#LostModule' },
  { path: '**', redirectTo: '/lost' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
