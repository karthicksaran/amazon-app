import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form = new FormGroup({
    food: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      CustomValidator.noSpace
    ]),
    comment: new FormControl('',Validators.minLength(5))
  })

  constructor() { }

  ngOnInit() {
  }

}
