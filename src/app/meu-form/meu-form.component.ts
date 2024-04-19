import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {
  ValueInput!: string;

  pessoa = {
    nome: 'Adelson',
    idade: '22'
  }
}
