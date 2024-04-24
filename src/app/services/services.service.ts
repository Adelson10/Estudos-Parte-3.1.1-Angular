import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly cursos:string[] = ['Angular 18', 'Java', 'Hana', 'Sap'];

  getCursos(): string[] {
    return this.cursos;
  }

}
