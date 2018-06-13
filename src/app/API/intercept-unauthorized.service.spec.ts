import { TestBed, inject } from '@angular/core/testing';

import { InterceptUnauthorizedService } from './intercept-unauthorized.service';

describe('InterceptUnauthorizedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptUnauthorizedService]
    });
  });

  it('should be created', inject([InterceptUnauthorizedService], (service: InterceptUnauthorizedService) => {
    expect(service).toBeTruthy();
  }));
});
