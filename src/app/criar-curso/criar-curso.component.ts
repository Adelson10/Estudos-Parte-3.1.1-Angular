import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [ServicesService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: ServicesService) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }
  AdicionarCurso(NovoCurso:string) {
    this.cursoService.addCurso(NovoCurso);
  }
}
