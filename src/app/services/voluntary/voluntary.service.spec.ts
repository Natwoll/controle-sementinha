import { TestBed } from '@angular/core/testing';

import { VoluntaryService } from './voluntary.service';

describe('VoluntaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoluntaryService = TestBed.get(VoluntaryService);
    expect(service).toBeTruthy();
  });
});
