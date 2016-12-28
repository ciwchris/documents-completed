/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompletedService } from './completed.service';

describe('CompletedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedService]
    });
  });

  it('should ...', inject([CompletedService], (service: CompletedService) => {
    expect(service).toBeTruthy();
  }));
});
