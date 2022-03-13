import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Actividad_1-Angular-Basics';

  // DEFINO EL VALOR INCIAL
  valorPantalla: any = 0;

  // PONGO EL VALOR DE LA PANTALLA A 0
  limpiar() {
    this.valorPantalla = "0";
  }

  // SEGUN EL BOTON QUE PULSE PONGO EL FORMATO DISTINTO
  introducirValor(valor: String | number) {

    if (valor == '+' || valor == '-' || valor == '/' || valor == '*') {
      this.valorPantalla += " " + valor + " ";
    } else if (valor == '.') {
      this.valorPantalla += "" + valor;
    } else {
      this.valorPantalla += "" + valor;
    }
  }

  // COJO EL VALOR DE LA PANTALLA, LO PASO A STRING Y LO DIVIDO PARA RECORRERLO EN UN ARRAY
  calcular() {
    var stringValores: String;
    stringValores = this.valorPantalla.toString();

    var arrayValoresString = stringValores.split(" ");

    // Guardo la primera posicion del array
    var a = Number(arrayValoresString[0]);

    // Recorro el array y segun el operador entro en una condicion u otra
    // y opero con el numero a la derecha del operador (la siguiente posicion del array)
    for (let index = 1; index < arrayValoresString.length; index++) {
      if (arrayValoresString[index] == '+') {
        a += Number(arrayValoresString[index + 1]);
      } else if (arrayValoresString[index] == '-') {
        a -= Number(arrayValoresString[index + 1]);
      } else if (arrayValoresString[index] == '*') {
        a *= Number(arrayValoresString[index + 1]);
      } else if (arrayValoresString[index] == '/') {
        a /= Number(arrayValoresString[index + 1]);
      }
    }

    // Asigno el valor a la pantalla de la calculadora
    this.valorPantalla = a;

  }
}
