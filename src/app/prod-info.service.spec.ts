import { TestBed } from '@angular/core/testing';

import { ProdInfoService } from './prod-info.service';

describe('ProdInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdInfoService = TestBed.get(ProdInfoService);
    expect(service).toBeTruthy();
  });
});
