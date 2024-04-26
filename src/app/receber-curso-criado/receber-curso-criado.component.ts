import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {
  constructor(private services:ServicesService){}

  curso?: string;

  ngOnInit(): void {
    this.services.emitirCursoCriado.subscribe(
      curso => this.curso = curso
    )
  }
}
