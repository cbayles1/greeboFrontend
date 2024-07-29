import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedBarComponent } from './picked-bar.component';

describe('PickedBarComponent', () => {
  let component: PickedBarComponent;
  let fixture: ComponentFixture<PickedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickedBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
