import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { BooksService } from 'src/app/service/books.service';

export interface FileReaderEventTarget extends EventTarget {
  result: string;
}

export interface FileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public libarian = false;
  public ngform: FormGroup;
  public image: any;
  public dataSource;
  public editMode = false;
  public editId: '';

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(public book: BooksService, public fb: FormBuilder) {
    this.ngform = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      authur: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    const BOOK_DATA = this.book.getAllBook().sort((a, b) => {
      const aDate = new Date(a.DateAdded);
      const bDate = new Date(b.DateAdded);
      return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
    });
    this.dataSource = new MatTableDataSource(BOOK_DATA);
    this.dataSource.paginator = this.paginator;
  }

  onDelete(event) {
    console.log(event);
    this.getBooks();
  }

  onEdit(event) {
    console.log(event);
    this.editId = event.id;
    this.editMode = true;
    this.ngform.patchValue({
      title: event.title,
      description: event.description,
      authur: event.authur,
      price: event.price,
    });
    this.image = event.image;
  }

  switchUser() {
    switch (this.libarian) {
      case false:
        this.libarian = true;
        break;
      case true:
        this.libarian = false;
        break;
      default:
        return;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: FileReaderEvent) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  arrangeByNewest() {
    const newestDate = this.dataSource.data.sort((a, b) => {
      const aDate = new Date(a.DateAdded);
      const bDate = new Date(b.DateAdded);
      return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
    });
    this.dataSource = new MatTableDataSource(newestDate);
    this.dataSource.paginator = this.paginator;
  }

  arrangeByOldest() {
    const oldestDate = this.dataSource.data.sort((a, b) => {
      const aDate = new Date(a.DateAdded);
      const bDate = new Date(b.DateAdded);
      return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
    });
    this.dataSource = new MatTableDataSource(oldestDate);
    this.dataSource.paginator = this.paginator;
  }

  arrangeByLowest() {
    const lowestPrice = this.dataSource.data.sort((a, b) => a.price - b.price);
    this.dataSource = new MatTableDataSource(lowestPrice);
    this.dataSource.paginator = this.paginator;
  }

  arrangeByHighest() {
    const highestPrice = this.dataSource.data.sort((a, b) => b.price - a.price);
    this.dataSource = new MatTableDataSource(highestPrice);
    this.dataSource.paginator = this.paginator;
  }

  onSubmit() {
    const payload = {
      id: this.ngform.value.title.split(' ').join('-').toLowerCase(),
      title: this.ngform.value.title,
      price: this.ngform.value.price,
      description: this.ngform.value.description,
      authur: this.ngform.value.authur,
      image: this.image,
      DateAdded: new Date().toString(),
    };
    if (!this.editMode) {
      this.book.addBook(payload);
    } else {
      this.book.editBook(this.editId, payload);
      this.editMode = false;
    }
    this.getBooks();
    this.clearData();
    this.image = '';
  }

  clearData() {
    this.ngform.patchValue({
      title: '',
      description: '',
      authur: '',
      price: '',
    });
  }
}
