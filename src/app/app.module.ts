import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './page/book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { BooksService } from './service/books.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, BookComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [BooksService, BookComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
