import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 login(a){

  console.log(a);

 }

 quali=[
   {id: 1, q:"10th"},
   {id: 2, q:"12th"},
   {id: 3, q:"BE"}
      ];

}
