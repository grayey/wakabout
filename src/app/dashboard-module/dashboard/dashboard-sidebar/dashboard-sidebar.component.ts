import { Component, OnInit, AfterViewInit,AfterViewChecked } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit, AfterViewInit {

  constructor() { }

  


  
  createScript(url){
    let mainScript = document.createElement('script');
    mainScript.src = url;
    mainScript.type = ('text/javascript');
    document.getElementsByTagName('head')[0].appendChild(mainScript);

  }







  ngOnInit() {


  }

  // ngAfterViewChecked(){
  //   this.createScript('assets/js/main.js');
  //   this.createScript('assets/js/vendor/jquery.slimscroll.js');
  //   this.createScript('assets/js/vendor/jquery.min.js');
  // }

  ngAfterViewInit() {
  //  var  mainUrl = 'assets/js/main.js';
  //  var slimScrollUrl = 'assets/js/vendor/jquery.slimscroll.js';
   
  this.createScript('assets/js/main.js');
  this.createScript('assets/js/vendor/jquery.slimscroll.js');
    
  this.createScript('assets/js/vendor/jquery.min.js');
 
  }
}




















