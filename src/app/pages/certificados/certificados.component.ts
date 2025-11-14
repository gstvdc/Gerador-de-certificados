import { Component, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from '../../_components/item-certificado/item-certificado.component';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class CertificadosComponent implements OnInit {
  constructor(private certificadoService: CertificadoService) {}
  ngOnInit(): void {
    console.log(this.certificadoService.certificados);
  }
}
