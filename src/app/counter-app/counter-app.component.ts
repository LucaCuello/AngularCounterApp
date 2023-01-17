import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css'],
})
export class CounterAppComponent {
  value: number = 0;
  stock: number = 15;

  handdleSum = () => {
    if (this.value >= this.stock) return;
    this.value++;
  };

  handdleSubstraction = () => {
    if (this.value === 0) return;
    this.value--;
  };

  handdleReset = () => {
    this.value = 0;
  };
}
