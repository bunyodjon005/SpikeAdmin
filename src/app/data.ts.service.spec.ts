import { TestBed } from '@angular/core/testing';

import { DataTsService } from './data.ts.service';

describe('DataTsService', () => {
  let service: DataTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
