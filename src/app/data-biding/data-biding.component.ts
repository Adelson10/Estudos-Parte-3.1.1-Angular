import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  url = 10;
  url2 = 12;
  url3:string = '../../assets/imagem.jpg';
  PalavraDigita:string = '';
  PalavraSalva:string = '';
  PerdeuFoco:string = '';
  isMouseOver: boolean = false;
  ValueInput: string = 'abc';

  pessoa: any = {
    nome: 'Adelson',
    idade: '22'
  }

  Valor():string {
    return this.url3;
  }

  Imagem():string {
    if (this.url < this.url2) {
      return this.url3;
    }else {
      return 'falha';
    }
  }

  botaoEvento(mensagemDoEvento:Element) {
    mensagemDoEvento.textContent = 'TESTE';
  }

  onKeyUp(event: KeyboardEvent) {
    this.PalavraDigita = (<HTMLInputElement>event.target)?.value;

  }

  SalvarValor(event: any) {
    this.PalavraSalva = event;
  }
  PerderFoco(event: Event) {
    this.PerdeuFoco = 'Perdeu o foco';
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


}
