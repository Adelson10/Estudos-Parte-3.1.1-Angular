import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Est';
  valor!: number;
  deletarCiclo!: boolean;

  Aumentar(){
    this.valor++;
  }

  destruir() {
    this.deletarCiclo = true;
  }
}
