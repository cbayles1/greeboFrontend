import { TestBed } from '@angular/core/testing';

import { ChocolateListService } from './chocolate-list.service';

describe('ChocolateListService', () => {
  let service: ChocolateListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocolateListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
