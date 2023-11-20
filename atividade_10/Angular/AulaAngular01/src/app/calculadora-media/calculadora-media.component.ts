import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-media',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css']
})
export class CalculadoraMediaComponent {
    n1 : number = 0;
    n2 : number = 0;
    n3 : number = 0;
    n4 : number = 0;
    resultado : number = 0;
    status: string = '';
   
    public calcular() {
      this.resultado = (this.n1*0.15) + (this.n2*0.30) + (this.n3*0.10)+ (this.n4*0.45);
      if (this.resultado >= 5) {
        this.status = 'Aprovado';
      } else {
        this.status = 'Reprovado';
      }
    }
  }

