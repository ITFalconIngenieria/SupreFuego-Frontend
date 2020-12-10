import { TestBed } from '@angular/core/testing';

import { CuartoBombaService } from './cuarto-bomba.service';

describe('CuartoBombaService', () => {
  let service: CuartoBombaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuartoBombaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
