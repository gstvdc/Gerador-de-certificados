import { Injectable } from '@angular/core';
import { Certificado } from '../interface/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: Certificado[] = [];

  constructor() {}

  adicionarCertificado(certificado: Certificado) {
    this.certificados.unshift({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }

  excluirCertificado(id: string) {
    this.certificados = this.certificados.filter(
      (certificado) => certificado.id !== id
    );
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
