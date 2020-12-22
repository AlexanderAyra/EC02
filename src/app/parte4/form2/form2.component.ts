import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  datos: string = '';
  formulario02 = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl('')
  })
  submit() {
    this.datos = `Codigo = ${this.formulario02.value.codigo} - 
                  Nombre = ${this.formulario02.value.nombre} - 
                  Precio = ${this.formulario02.value.precio} - 
                  Cantidad = ${this.formulario02.value.cantidad} - 
                  Subtotal = ${this.formulario02.value.precio * this.formulario02.value.cantidad} - 
                  IGV = ${(this.formulario02.value.precio * this.formulario02.value.cantidad) * 0.18}
                  Neto = ${(this.formulario02.value.precio * this.formulario02.value.cantidad) + (this.formulario02.value.precio * this.formulario02.value.cantidad) * 0.18}`
  }
}
