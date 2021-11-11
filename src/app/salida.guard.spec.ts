import { TestBed } from '@angular/core/testing';

import { SalidaGuard } from './salida.guard';

describe('SalidaGuard', () => {
  let guard: SalidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
