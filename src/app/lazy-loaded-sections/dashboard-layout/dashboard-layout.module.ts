import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';

// third-party modules
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// components used in this layout
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';

// components for each page hosted by this layout
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { Page1Component } from '../../pages/page1/page1.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule,
    NgbModule,
    NgbDropdownModule,
    PerfectScrollbarModule
  ],
  declarations: [
    DashboardLayoutComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent,
    // pages in this layout
    DashboardComponent,
    Page1Component
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ]
})
export class DashboardLayoutModule { }
