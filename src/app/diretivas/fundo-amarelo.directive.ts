import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {
  /// O ElementRef Funciona como um buscador na DOM
  /// o Renderer e uma forma mais segura de utilizar modificações no DOM apartir do TS já que ele 
  constructor(private el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'yellow'
    )
   }

}
