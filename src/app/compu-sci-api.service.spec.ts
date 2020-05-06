import { TestBed } from '@angular/core/testing';

import { CompuSciAPIService } from './compu-sci-api.service';

describe('CompuSciAPIService', () => {
  let service: CompuSciAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompuSciAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
