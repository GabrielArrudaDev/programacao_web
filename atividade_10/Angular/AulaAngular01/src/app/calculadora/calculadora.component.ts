import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  n1: number = 0;
  n2: number = 0;
  operacaoSelecionada: string = '';
  resultado: number = 0;

  calcular() {
    // Adicione a lógica de cálculo aqui, com base na operação selecionada
    switch (this.operacaoSelecionada) {
      case '1':
        this.resultado = this.n1 + this.n2;
        break;
      case '2':
        this.resultado = this.n1 - this.n2;
        break;
      case '3':
        this.resultado = this.n1 * this.n2;
        break;
      case '4':
        if (this.n2 !== 0) {
          this.resultado = this.n1 / this.n2;
        } else {
          // Lógica para lidar com divisão por zero, se necessário
          this.resultado = NaN; // Ou outro valor que faça sentido para seu caso
        }
        break;
      default:
        break;
    }
  }

  onOperacaoChange() {
    // Se desejar realizar a ação imediatamente após a seleção da operação, chame o método de cálculo aqui
    this.calcular();
  }
}
