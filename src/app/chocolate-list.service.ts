import { Injectable, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChocolateListService {
  public barList: any;
  baseUrl = "http://localhost:5099/api/";
  jsonHeaders = {headers: {Accept: 'application/json'}};

  constructor(private httpClient : HttpClient) {
    console.log("In Constructor");
    this.barList = this.retrieveNewChocolateList();
  }

  private retrieveNewChocolateList(): any {
    this.httpClient.get(this.baseUrl + `chocolateBars/?limit=100`, this.jsonHeaders).subscribe((res: any) => {
      this.barList = res;
    });
    return this.barList;
  }

  public getList() {
    if (this.barList) return this.barList;
    else return [{id: -1}];
  }
}
