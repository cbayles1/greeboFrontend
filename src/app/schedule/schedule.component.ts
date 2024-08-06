import { Component } from '@angular/core';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { MealComponent } from './meal/meal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'schedule',
  standalone: true,
  imports: [ChocolateListComponent, MealComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  daysOfTheWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  baseUrl = "http://localhost:5099/api/";
  jsonHeaders = {headers: {Accept: 'application/json'}};
  
  isLoading = false;
  health = 75;
  schedule: Map<number,number> = new Map();
  
  constructor(private httpClient: HttpClient) {  
    for (let i = 0; i < 21; i++) {
      this.schedule.set(i, -1);
    }
  }

  submitSchedule() {
    const scheduleArr = Object.values(Object.fromEntries(this.schedule));
  
    let cursor = scheduleArr.length - 1;      // Remove trailing -1 values
    while (cursor >= 0 && scheduleArr[cursor] < 0) cursor--;
    const scheduleStr = scheduleArr.slice(0, cursor + 1).join(',').toString();

    if (scheduleStr.length < 1) {
      return;
    }

    this.isLoading = true;
    this.httpClient.get(this.baseUrl + `schedule?scheduleStr=${scheduleStr}`, this.jsonHeaders).subscribe((res: any) => {
      this.isLoading = false;
      this.health = res;
    });
  }

  addToSchedule(choice: any) {
    this.schedule.set(choice.mealIndex, choice.barId);
  }
}
