import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should have an intial data of 20 datas of books', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service.books.length).toEqual(20);
  });

  it('should have an intial data', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service.books).toBeDefined();
  });
});
