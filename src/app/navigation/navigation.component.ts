import { Component } from '@angular/core';
import { DayCounterComponent } from "./day-counter/day-counter.component";
import { TimeCounterComponent } from "./time-counter/time-counter.component";
import { ProfileButtonComponent } from "./profile-button/profile-button.component";

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [DayCounterComponent, TimeCounterComponent, ProfileButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
