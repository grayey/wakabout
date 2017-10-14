import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  /**
   * This is used to navigate back to previous url while 404 error is encountered.
   */
  goBackUrl() {
    window.history.back();
  }

  ngOnInit() {
  }

}
