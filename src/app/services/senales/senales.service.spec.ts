import { TestBed } from '@angular/core/testing';

import { SenalesService } from './senales.service';

describe('SenalesService', () => {
  let service: SenalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
