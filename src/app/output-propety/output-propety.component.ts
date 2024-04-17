import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-propety',
  templateUrl: './output-propety.component.html',
  styleUrls: ['./output-propety.component.css']
})
export class OutputPropetyComponent implements OnInit {
  //Recebe o valor da classe pai // ENTRADA DOS DADOS DO PAI PARA O FILHO
  @Input() valor: number = 0;
  //Emite um evento Customizado para a classe pai // SAIDA DOS DADOS DO FILHO PARA O PAI
  @Output() mudouValor = new EventEmitter();
  //Variavel do DOM
  @ViewChild('campoInput') campoValorInput!:ElementRef;

  ngOnInit(): void {
    this.mudouValor.emit(this.valor);
  }

  constructor(){
  }

  AumDim(arg: string) {
    if(arg=='+') {
      this.campoValorInput.nativeElement.value++;
      //Esta emitindo um evento com o valor somado para o componente pai.
      this.mudouValor.emit(this.valor);

    }else {
      this.campoValorInput.nativeElement.value--;
      this.mudouValor.emit(this.valor);
    }
  }
}
