import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModuleModule} from './dashboard-module/dashboard-module.module';

import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent

   
  ],

  imports: [
    BrowserModule,
    DashboardModuleModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
