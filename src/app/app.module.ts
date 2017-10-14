import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModuleModule} from './dashboard/dashboard.module';

import { DashboardComponent } from './dashboard/dashboard.component';
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
