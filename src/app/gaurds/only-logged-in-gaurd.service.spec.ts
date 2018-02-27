import { TestBed, inject } from '@angular/core/testing';

import { OnlyLoggedInGaurdService } from './only-logged-in-gaurd.service';

describe('OnlyLoggedInGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInGaurdService]
    });
  });

  it('should be created', inject([OnlyLoggedInGaurdService], (service: OnlyLoggedInGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
