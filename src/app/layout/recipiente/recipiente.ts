import { Component, input } from '@angular/core';

@Component({
  selector: 'recipiente',
  templateUrl: './recipiente.html',
  styleUrl: './recipiente.scss'
})
export class Recipiente {
  titulo = input.required<string>();
  breadcrumb = input<string>();
}
