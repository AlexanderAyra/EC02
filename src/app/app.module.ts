import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DadoComponent } from "./parte1/dado/dado.component";
import { CronometroComponent } from "./parte2/cronometro/cronometro.component";
import { Form1Component } from "./parte3/form1/form1.component";
import { Form2Component } from "./parte4/form2/form2.component";
import { LibreComponent } from "./parte5/libre/libre.component";

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    CronometroComponent,
    Form1Component,
    Form2Component,
    LibreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
