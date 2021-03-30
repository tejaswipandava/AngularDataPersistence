import { TestBed } from '@angular/core/testing';

import { UnsavedataGuard } from './unsavedata.guard';

describe('UnsavedataGuard', () => {
  let guard: UnsavedataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsavedataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
