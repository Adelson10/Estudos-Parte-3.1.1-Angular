import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
    pessoas = [
      {
        nome: 'Adelson',
        idade: 17
      },
      {
        nome: 'Emily',
        idade: 26
      },
      {
        nome: 'Gustavo',
        idade: 25
      },
      {
         nome: 'Rayssa',
        idade: 32
      },
    ]

    cursos:string[] = ['Adelson','nome'];
    monstrarCurso!:boolean;
    aba?:string;
    meuFavorito!:boolean;
    ativo?:boolean;
    tamanhoFonte?:string;
    Elves: any = {
      personagem : {
        nome: null
      }
    }
}
