import { TestBed, inject } from '@angular/core/testing';

import { AlwaysAuthGaurdService } from './always-auth-gaurd.service';

describe('AlwaysAuthGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthGaurdService]
    });
  });

  it('should be created', inject([AlwaysAuthGaurdService], (service: AlwaysAuthGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
