import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts;any=[];
  constructor(private router:Router, private http: HttpClient){
    // http.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe(
    //   data =>{ 
    //     this.posts=data;
    //     console.log(data)},
    //   error=>console.error(),//optional error
    //   ()=>console.log('complete')//optional whatever it should do some process na 
      
    // )

  }

  ngOnInit(){
    this.http.get('http://localhost:7781/getTodoList')
    .subscribe(
      data =>{ 
        this.posts=data;
        console.log(data)},
      // error=>console.error(),//optional error
      // ()=>console.log('complete')//optional whatever it should do some process na 
      
    )

  }

  post(message){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {

    title :"new post",
    body : message

    }).subscribe(

      ks=>console.log(ks)
    )

    this.put("newmessage",4);
    this.delete(4);
  }


  put(newmessage,id){ //backtik careful
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {

    
    body : newmessage

    }).subscribe(

      ks=>console.log(ks)
    )
  }

  delete(id){ //backtik careful
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(

      ks=>console.log(ks)
    )
  }

navigate(link){
this.router.navigate(link);

}
 

}
