import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  aluno = {
    ra: '',
    nome: '',
    email: '',
    celular: ''
  };

  submitForm(form: any) {
    if (form.valid) {
      // Aqui você pode implementar a lógica para enviar os dados do aluno
      console.log('Aluno:', this.aluno);
      // Por exemplo, enviar para um serviço ou API
    } else {
      // Caso o formulário não seja válido, você pode realizar alguma ação, como exibir uma mensagem de erro
      console.log('Formulário inválido. Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
