import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateBagComponent } from './chocolate-bag.component';

describe('ChocolateBagComponent', () => {
  let component: ChocolateBagComponent;
  let fixture: ComponentFixture<ChocolateBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocolateBagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolateBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
