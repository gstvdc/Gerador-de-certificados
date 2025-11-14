import { Component, input, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-secondary-button',
  imports: [NgStyle],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css',
})
export class SecondaryButtonComponent {
  @Input() textoBotao: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
