import { TestBed } from '@angular/core/testing';

import { TanquesAguaService } from './tanques-agua.service';

describe('TanquesAguaService', () => {
  let service: TanquesAguaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TanquesAguaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
