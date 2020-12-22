import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  datos: string = '';
  formulario01 = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    edad: new FormControl(''),
    comentario: new FormControl('')
  });
  submit() {
    this.datos = `Nombre = ${this.formulario01.value.nombre} - 
                  Correo = ${this.formulario01.value.correo} - 
                  Edad = ${this.formulario01.value.edad} - 
                  Comentario = ${this.formulario01.value.comentario}`
  }
}
