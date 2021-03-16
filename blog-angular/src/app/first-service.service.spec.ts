import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { FirstServiceService } from './first-service.service';


describe('FirstServiceService', () => {
  let service: FirstServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
