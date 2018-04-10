import { TestBed, inject } from '@angular/core/testing';

import { SimpleService } from './simple.service';
import { OtherService } from './other.service';

describe('SimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService, OtherService]
    });
  });

  it('should be created', inject([SimpleService], (service: SimpleService) => {
    expect(service).toBeTruthy();
  }));
});
