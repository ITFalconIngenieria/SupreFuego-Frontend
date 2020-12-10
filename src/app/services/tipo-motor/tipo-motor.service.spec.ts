import { TestBed } from '@angular/core/testing';

import { TipoMotorService } from './tipo-motor.service';

describe('TipoMotorService', () => {
  let service: TipoMotorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMotorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
