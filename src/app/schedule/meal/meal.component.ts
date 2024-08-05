import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChocolateListComponent } from '../chocolate-list/chocolate-list.component';

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
  choice: any = null;

  constructor(public dialog : MatDialog) {}

  setChoice(chocolateBar: any) {
    this.choice = chocolateBar;
    const mealsPerDay = 3;
    let index = this.day * mealsPerDay + this.time;
    this.setChoiceEvent.emit({'mealIndex': index, 'barId': chocolateBar.id});
  }

  openMenu() {
    let menu = this.dialog.open(ChocolateListComponent, {maxWidth: '250px', maxHeight: '250px'});
    menu.afterClosed().subscribe(result => {
      this.setChoice(result);
    });
  }
}
