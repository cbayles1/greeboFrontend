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
export class AppComponent {
  user: any;
  baseUrl = "http://localhost:5099/api/";
  jsonHeaders = {headers: {Accept: 'application/json'}};
  constructor(private httpClient: HttpClient) {}
  
  // ngOnInit() {
  //   this.importUserInfo();
  //   if (this.user != null && this.user.id != null) {
      
  //   }
  // }

  // importUserInfo() {
  //   const userId = 1;
  //   this.httpClient.get(this.baseUrl + `users/${userId}`, this.jsonHeaders).subscribe((res: any) => {
  //     this.user = res;
  //   });
  // }
}