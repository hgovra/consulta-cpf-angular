import { Component, input } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'item',
  imports: [Icon],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  icone = input.required<string>();
  rotulo = input.required<string>();
  texto = input.required<string>();
}
