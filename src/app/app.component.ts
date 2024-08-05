import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GreebloBoxComponent } from "./greeblo-box/greeblo-box.component";
import { ScheduleComponent } from "./schedule/schedule.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreebloBoxComponent, ScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}