import { Component } from '@angular/core';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { MealComponent } from './meal/meal.component';

@Component({
  selector: 'schedule',
  standalone: true,
  imports: [ChocolateListComponent, MealComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
