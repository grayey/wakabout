import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';









@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    DashboardBodyComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent
  ],
  exports:[
    DashboardBodyComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent
  ]

})
export class DashboardModuleModule { }
