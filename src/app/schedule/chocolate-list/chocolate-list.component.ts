import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChocolateListService } from '../../chocolate-list.service';

@Component({
  selector: 'chocolate-list',
  standalone: true,
  imports: [],
  template: `
    @if (this.barList != null) {
      <div>
        @for (bar of this.barList; track bar.id) {
          <button (click)="this.dialogRef.close(bar)">{{bar.company}} | 
            Origin: {{bar.specificOrigin}}, {{bar.broadOrigin}} | 
            Critic Rating: {{bar.rating}}
            /5
          </button><br>
        }
      </div>
    }
  `,
  styleUrl: './chocolate-list.component.scss'
})
export class ChocolateListComponent {
  barList: any;

  constructor(
    public dialogRef: MatDialogRef<ChocolateListComponent>, 
    private chocolateListService: ChocolateListService
  ) {
    this.barList = this.chocolateListService.getList();
  }

  onNoClick() {
    this.dialogRef.close();
  }
}