import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: `<p>{{sampleBar}}</p><br/> <button (click)="getChocBar()">Click Me!</button>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sampleBar: any = null;
  baseUrl = "http://localhost:5099/api/";
  constructor(private httpClient: HttpClient) {}
  
  getChocBar(): void {
    this.httpClient.get(this.baseUrl + "chocolateBars/2", {headers: {Accept: 'application/json'}}).subscribe((res: any) => {
      this.sampleBar = res;
      console.log(this.sampleBar);
    });
  }
}