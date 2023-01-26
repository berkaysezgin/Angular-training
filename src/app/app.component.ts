import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'udemy-angular-course';
  constructor(private toastr: ToastrService,
    private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showSpinner(){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 1.3 seconds */
      this.spinner.hide();
    }, 1300);
  }
  }

