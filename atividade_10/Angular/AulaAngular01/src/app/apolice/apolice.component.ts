import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
    nomeSegurado: string = '';
    sexo: string = 'masculino';
    idade: number = 0;
    valorAutomovel: number = 0;
    valorAplice: number | null = null;
  
    calcularValor() {
      if (this.sexo === 'masculino') {
        if (this.idade <= 25) {
          this.valorAplice = this.valorAutomovel * 0.15;
        } else {
          this.valorAplice = this.valorAutomovel * 0.10;
        }
      } else if (this.sexo === 'feminino') {
        this.valorAplice = this.valorAutomovel * 0.08;
      }
    }
  }
  