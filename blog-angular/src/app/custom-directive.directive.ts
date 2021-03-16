import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elRef:ElementRef) {
    elRef.nativeElement.style.color="white";
    elRef.nativeElement.style.backgroundColor = "black";

   }

}
