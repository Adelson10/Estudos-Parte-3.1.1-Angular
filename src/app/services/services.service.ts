import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  emitirCursoCriado = new EventEmitter<string>;
  static criouNovoCurso = new EventEmitter<string>;

  private readonly cursos:string[] = ['Angular 18', 'Java', 'Hana', 'Sap'];

  getCursos(): string[] {
    return this.cursos;
  }

  public addCurso(NovoCurso:string) {
    this.cursos.push(NovoCurso);
    this.emitirCursoCriado.emit(NovoCurso);
    ServicesService.criouNovoCurso.emit(NovoCurso);
  }
}
