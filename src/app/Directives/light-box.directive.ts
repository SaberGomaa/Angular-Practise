import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})

export class LightBoxDirective {

  // private elemRef: ElementRef;

  //property decorator
  //@Input() highLightColor : string ="red" ;

  @Input('LightBox') highLightColor : string ="red" ;

  @Input() defaultColor : string ="black" ;


  constructor(private elemRef: ElementRef) {
    // this.elemRef = elemRef;
    elemRef.nativeElement.style.border = `1px solid ${this.defaultColor} `;

  }
  //method decorator
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = "1px solid black ";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highLightColor}`;
  }

}
