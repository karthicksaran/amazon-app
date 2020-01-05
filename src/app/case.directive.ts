import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCase]'
})
export class CaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup')
  keyup(){
    this.el.nativeElement.value ="Karthik";
  }

  @HostListener('click')
  highLight(){
    console.log("Highlighted");
  }

}
