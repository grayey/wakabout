import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardModuleModule} from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import {HomeModuleModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HomeModuleModule,
    DashboardModuleModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
