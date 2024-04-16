import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propety.component.html',
  styleUrls: ['./input-propety.component.css'],
  inputs: ['nome:NomeCurso']
})
export class InputPropetyComponent {
    nome: string = '';
}
