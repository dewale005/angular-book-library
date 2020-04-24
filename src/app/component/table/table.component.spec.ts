import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MaterialModule } from 'src/app/material.module';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [TableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Edit informations of books', () => {
    const title = 'MY NAME IS ADEWALE OLAGUNJU';
    const data = component.book.books[1];
    data.title = title;
    component.editData(data);
    expect(data.title).toEqual(title);
  });


  it('deletes books data', () => {
    const id = component.book.books[0].id;
    component.deleteData(id);
    expect(component.book.books.length).toEqual(19);
  });
});
