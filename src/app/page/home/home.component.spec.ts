import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from 'src/app/component/table/table.component';
import { BooksService } from 'src/app/service/books.service';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule,
      ],
      declarations: [HomeComponent, TableComponent],
      providers: [BooksService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Initial Mode to view the app', () => {
    expect(component.libarian).toEqual(false);
    expect(component.editMode).toEqual(false);
  });

  it('User can switch mode of the app', () => {
    component.switchUser();
    expect(component.libarian).toEqual(true);
    component.switchUser();
    expect(component.libarian).toEqual(false);
  });

  it('Data is called when page is initialized', () => {
    component.ngOnInit();
    expect(component.dataSource.data).toBeDefined();
  });

  it('Data can be filter', () => {
    component.applyFilter('Fantastic Fresh Bike');
    expect(component.dataSource.filteredData.length).toEqual(1);
  });

  it('Data can be arrange by newest date', () => {
    component.arrangeByNewest();
    expect(component.dataSource.data[0].title).toEqual('Fantastic Fresh Bike');
  });

  it('Data can be arrange by oldest date', () => {
    component.arrangeByOldest();
    expect(component.dataSource.data[0].title).toEqual('Awesome Soft Bike');
  });

  it('Data can be arrange by lower price', () => {
    component.arrangeByLowest();
    expect(component.dataSource.data[0].title).toEqual(
      'Unbranded Plastic Pants'
    );
  });

  it('Data can be arrange by highest price', () => {
    component.arrangeByHighest();
    expect(component.dataSource.data[0].title).toEqual('Small Fresh Tuna');
  });
});
