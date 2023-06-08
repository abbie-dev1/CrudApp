import { TestBed } from '@angular/core/testing';

import { TololistcrudService } from './tololistcrud.service';

describe('TololistcrudService', () => {
  let service: TololistcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TololistcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
