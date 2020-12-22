import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadoComponent } from "./parte1/dado/dado.component";
import { CronometroComponent } from "./parte2/cronometro/cronometro.component";
import { Form1Component } from "./parte3/form1/form1.component";
import { Form2Component } from "./parte4/form2/form2.component";
import { LibreComponent } from "./parte5/libre/libre.component";

const routes: Routes = [
  {
    path: 'dado',
    component: DadoComponent
  },
  {
    path: 'cronometro',
    component: CronometroComponent
  },
  {
    path: 'formulario1',
    component: Form1Component
  },
  {
    path: 'formulario2',
    component: Form2Component
  },
  {
    path: 'libre',
    component: LibreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
