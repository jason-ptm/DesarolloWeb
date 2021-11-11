import { TestBed } from '@angular/core/testing';

import { CargasJsService } from './cargas-js.service';

describe('CargasJsService', () => {
  let service: CargasJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargasJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
