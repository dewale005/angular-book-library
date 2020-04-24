import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BooksService } from 'src/app/service/books.service';

export interface BooksDetails {
  id: string;
  title: string;
  price: string;
  description: string;
  review: string;
  authur: string;
  image: string;
  isEdited: boolean;
  DateAdded: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  public details = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BooksDetails
  ) {}

  ngOnInit() {
    this.details = this.data;
  }

  ngOnDestroy(): void {}
}
