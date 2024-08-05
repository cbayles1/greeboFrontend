import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreebloBoxComponent } from './greeblo-box.component';

describe('GreebloBoxComponent', () => {
  let component: GreebloBoxComponent;
  let fixture: ComponentFixture<GreebloBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreebloBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreebloBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
