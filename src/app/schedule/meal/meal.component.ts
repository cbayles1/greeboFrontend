import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'meal',
  standalone: true,
  imports: [],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent {
  @Output() setChoiceEvent = new EventEmitter<Object>();
  @Input() time!: number;
  @Input() day!: number;

  setChoice(barId: number) {
    const mealsPerDay = 3;
    let index = this.day * mealsPerDay + this.time;
    this.setChoiceEvent.emit({'mealIndex': index, 'barId': barId});
  }
}
