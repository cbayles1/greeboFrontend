import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeboBoxComponent } from './greebo-box.component';

describe('GreeboBoxComponent', () => {
  let component: GreeboBoxComponent;
  let fixture: ComponentFixture<GreeboBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreeboBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreeboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
