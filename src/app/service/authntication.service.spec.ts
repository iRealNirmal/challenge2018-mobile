import { TestBed, inject } from '@angular/core/testing';

import { AuthnticationService } from './authntication.service';

describe('AuthnticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthnticationService]
    });
  });

  it('should be created', inject([AuthnticationService], (service: AuthnticationService) => {
    expect(service).toBeTruthy();
  }));
});
