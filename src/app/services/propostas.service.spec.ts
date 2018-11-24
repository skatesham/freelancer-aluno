import { TestBed } from '@angular/core/testing';

import { PropostasService } from './propostas.service';

describe('PropostasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropostasService = TestBed.get(PropostasService);
    expect(service).toBeTruthy();
  });
});
