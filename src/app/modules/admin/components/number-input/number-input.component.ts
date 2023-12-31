import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss'
})
export class NumberInputComponent {
  @Input() value: number  = 0;
  @Output() valueChange = new EventEmitter<number>();

  increment() {
    this.value++;
    this.emitValue();
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.emitValue();
    }
  }

  private emitValue() {
    this.valueChange.emit(this.value);
  }

}
