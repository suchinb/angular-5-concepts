import { TestBed, inject } from '@angular/core/testing';

import { SolutionResolveService } from './solution-resolve.service';

describe('SolutionResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolutionResolveService]
    });
  });

  it('should be created', inject([SolutionResolveService], (service: SolutionResolveService) => {
    expect(service).toBeTruthy();
  }));
});
