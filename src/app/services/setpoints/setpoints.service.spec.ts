import { TestBed } from '@angular/core/testing';

import { SetpointsService } from './setpoints.service';

describe('SetpointsService', () => {
  let service: SetpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
