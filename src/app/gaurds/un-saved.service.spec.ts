import { TestBed, inject } from '@angular/core/testing';

import { UnSavedService } from './un-saved.service';

describe('UnSavedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnSavedService]
    });
  });

  it('should be created', inject([UnSavedService], (service: UnSavedService) => {
    expect(service).toBeTruthy();
  }));
});
