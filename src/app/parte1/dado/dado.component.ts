import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {

  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  resultado: string;

  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Ganó';
    else
      this.resultado = 'Perdió';
  }
}
