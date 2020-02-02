import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaseDirective } from './case.directive';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostViewComponent } from './post-view/post-view.component';



@NgModule({
  declarations: [
    AppComponent,
    CaseDirective,
    ReactiveFormComponent,
    TemplateFormsComponent,
    NotFoundComponent,
    PostViewComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'template',
          component:TemplateFormsComponent
        },
        {
          path:'reactive',
          component:ReactiveFormComponent
        },
        
        {
          path:'post/:id',
          component:PostViewComponent
        },
        //for not found component ...
        {
          path:'**',
          component:NotFoundComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
