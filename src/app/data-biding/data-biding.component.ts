import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  url = 10;
  url2 = 12;
  url3: string = '../../assets/imagem.jpg';

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

  onKeyUp(event:KeyboardEvent) {
    console.log(event);

  }

}
