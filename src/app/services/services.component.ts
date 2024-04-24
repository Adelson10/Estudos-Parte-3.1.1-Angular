import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursoService: ServicesService) {
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

}
