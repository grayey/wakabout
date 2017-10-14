import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const HOME_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(HOME_ROUTES),
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class HomeModuleModule { }

