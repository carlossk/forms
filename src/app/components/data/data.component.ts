import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public form1: FormGroup;
  constructor() {
    this.form1 = new FormGroup({
      name: new FormControl('Carlos', [Validators.required,Validators.minLength(3)], []),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])

    });
  }
  saveData() {
    console.log(this.form1.value);
  }

  ngOnInit() {
  }

}
