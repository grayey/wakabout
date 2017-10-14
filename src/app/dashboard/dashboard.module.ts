import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ErrorPageComponent} from '../error-page/error-page.component';

const DASHBOARD_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: []
  },
  {path: '**', component: ErrorPageComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],

  declarations: [
    DashboardBodyComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    ErrorPageComponent,
    DashboardComponent
  ],
  exports: [
    DashboardBodyComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    ErrorPageComponent,
    DashboardComponent,
    RouterModule
  ]

})
export class DashboardModuleModule { }
