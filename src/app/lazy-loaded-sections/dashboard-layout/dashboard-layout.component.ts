import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit {
  pageWidth: number;
  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard']);
    }
  }

  ngAfterViewInit() {
    window.addEventListener('DOMContentLoaded', this.onWindowReady);
    window.addEventListener('resize', this.setWidth);
    this.setWidth();
  }

  onWindowReady() {
    window.removeEventListener( 'DOMContentLoaded', this.onWindowReady, false);
    this.setWidth();
  }

  toggleSidebar() {
    this.setWidth();
    // if ($("#main-wrapper").hasClass("mini-sidebar")) {
    //   $("body").trigger("resize");
    //   $("#main-wrapper").removeClass("mini-sidebar");
    //
    // } else {
    //   $("body").trigger("resize");
    //   $("#main-wrapper").addClass("mini-sidebar");
    // }
  }

  setWidth() {
    this.pageWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
  }
}
