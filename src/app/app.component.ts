import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sampleBar: any;
  myOutput = "";
  baseUrl = "http://localhost:5099/api/";
  constructor(private httpClient: HttpClient) {}
  
  pickChoc(barId: number): void {
    this.httpClient.get(this.baseUrl + `chocolateBars/${barId}`, {headers: {Accept: 'application/json'}}).subscribe((res: any) => {
      this.myOutput = res.company;
    });
  }
}