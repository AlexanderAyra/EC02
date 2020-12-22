import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {

  numero: number = 0;
  seti: any;
  demo: any;

  increment() {
    this.demo = setInterval(() => {
      if (this.numero === 10) {
        this.numero = 0;
      } else {
        this.numero++;
      }
    }, 1000)
  }

  detener() {
    clearInterval(this.demo)
  }

}
