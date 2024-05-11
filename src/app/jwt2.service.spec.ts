import { TestBed } from '@angular/core/testing';

import { JWT2Service } from './jwt2.service';

describe('JWT2Service', () => {
  let service: JWT2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWT2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
