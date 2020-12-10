import { TestBed } from '@angular/core/testing';

import { EnvivoService } from './envivo.service';

describe('EnvivoService', () => {
  let service: EnvivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
