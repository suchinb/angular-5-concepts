import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { OnlyLoggedInGaurdService } from './only-logged-in-gaurd.service';
import { UserServiceService } from './user-service.service';

describe('OnlyLoggedInGaurdService', () => {
  const router = {
        navigate: jasmine.createSpy('navigate')
    };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInGaurdService, UserServiceService, {provide: Router, useValue: router}]
    });
  });

  it('should be created', inject([OnlyLoggedInGaurdService], (service: OnlyLoggedInGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
