import { TestBed } from '@angular/core/testing';

import { PoolautoApiService } from './poolauto-api.service';

describe('PoolautoApiService', () => {
  let service: PoolautoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolautoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
