import { Component, OnInit } from '@angular/core';
import * as runMe from '../../assets/js/main';
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  static onLoadInit() {
    runMe.runDashboard();
  }

  constructor() { }


  ngOnInit() {
    DashboardComponent.onLoadInit();
  }



}
