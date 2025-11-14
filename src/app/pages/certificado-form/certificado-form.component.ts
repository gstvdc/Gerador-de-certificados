import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { Certificado } from '../../interface/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    NgStyle,
    CommonModule,
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css',
})
export class CertificadoFormComponent {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];

  certificado: Certificado | undefined;

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.atividades.length > 0 && this.nome.length > 0;
  }

  adicionarAtividade() {
    if (this.atividade.trim().length > 0) {
      this.atividades.push(this.atividade.trim());
      this.atividade = '';
    }
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
  }

  submit() {
    this.certificado = {
      atividades: this.atividades,
      nome: this.nome,
    };
  }
}
