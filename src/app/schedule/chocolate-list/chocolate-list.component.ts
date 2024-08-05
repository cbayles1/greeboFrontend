import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'chocolate-list',
  standalone: true,
  imports: [],
  template: `
    @if (this.barList != null) {
      <div>
        @for (bar of this.barList; track bar.id) {
          <button>{{bar.company}}</button>
        }
      </div>
    }
  `,
  styleUrl: './chocolate-list.component.scss'
})
export class ChocolateListComponent {
  barList: any;
  baseUrl = "http://localhost:5099/api/";
  jsonHeaders = {headers: {Accept: 'application/json'}};

  constructor(private httpClient: HttpClient) {}
  
  ngOnInit() {
    this.importList();
  }

  importList() {
    // this.httpClient.get(this.baseUrl + `users/${this.userId}/bars`, this.jsonHeaders).subscribe((res: any) => {
    //   this.barList = res;
    // });
  }
}