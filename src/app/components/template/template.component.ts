import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border:solid 1px red;
  }
  `]
})
export class TemplateComponent implements OnInit {

  user: object = {
    name: null,
    lastName: null,
    email: null,
    country: 'MX'
  };
  country = [{
    code: 'MX',
    name: 'Mexico'
  },{
    code: 'US',
    name: 'United States'
  },{
    code: 'CRI',
    name: 'Costa Rica'
  }]

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('send data', form);
  }
}
