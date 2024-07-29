import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavigationComponent } from "./navigation/navigation.component";
import { AppBodyComponent } from "./app-body/app-body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, AppBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myOutput = "";
  baseUrl = "http://localhost:5099/api/";
  jsonHeaders = {headers: {Accept: 'application/json'}};
  constructor(private httpClient: HttpClient) {}
  
  pickChoc(barId: number): void {
    this.httpClient.get(this.baseUrl + `chocolateBars/${barId}`, this.jsonHeaders).subscribe((res: any) => {
      this.myOutput = res.company;
    });
  }
}