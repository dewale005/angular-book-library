import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookComponent } from 'src/app/page/book/book.component';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['image', 'details', 'actions'];
  @Input() dataSource: Array<any>;
  @Input() libarian: boolean;

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(public dialog: MatDialog, public book: BooksService) {}

  ngOnInit() { }


  openModal(data): void {
    this.dialog.open(BookComponent, { data });
  }

  editData(data) {
    this.edit.emit(data);
  }

  deleteData(data) {
    this.book.deleteBook(data);
    this.delete.emit();
  }
}
