import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')
  onMouseOver(){
    /*this._Renderer.setStyle(
      this._ElementRef.nativeElement,
      'background-color',
      'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    /*this._Renderer.setStyle(
      this._ElementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'write';
  }

  //@HostBinding('style.backgroundColor') backgroundColor?:string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor?:string;

  constructor(
  //private _ElementRef: ElementRef,
  //private _Renderer: Renderer2
  ) { }

}
