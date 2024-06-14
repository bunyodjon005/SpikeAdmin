import { TestBed } from '@angular/core/testing';



describe('NgxServiceService', () => {
  let service: NgxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
