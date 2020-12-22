import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-libre',
  templateUrl: './libre.component.html',
  styleUrls: ['./libre.component.css']
})
export class LibreComponent {
  data: Array<any> = []
  libre = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    dni: new FormControl('')
  });

  submit() {
    console.log(this.data[0].nombre.value);
    this.data.push(this.libre.controls)
  }
}
