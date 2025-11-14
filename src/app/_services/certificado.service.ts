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
    console.log(this.certificados);
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
