import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button [disabled]="value || disabled">{{value}}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value!: 'X' | 'O';
  @Input() disabled = false;

}
