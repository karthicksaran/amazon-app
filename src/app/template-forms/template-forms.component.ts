import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(a){

    console.log(a);
  
   }
  
   quali=[
     {id: 1, q:"10th"},
     {id: 2, q:"12th"},
     {id: 3, q:"BE"}
        ];

}
