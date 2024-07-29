import { Component } from '@angular/core';
import { GreeboBoxComponent } from "./greebo-box/greebo-box.component";
import { PickedBarComponent } from "./picked-bar/picked-bar.component";
import { ChocolateBagComponent } from "./chocolate-bag/chocolate-bag.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [GreeboBoxComponent, PickedBarComponent, ChocolateBagComponent],
  templateUrl: './app-body.component.html',
  styleUrl: './app-body.component.scss'
})
export class AppBodyComponent {
  
}
