import { Component, OnInit, Input } from '@angular/core';
import { Book, GoogleBook } from '../../models/book';
import { BookService } from '../book.service';
import { GoogleBooksApiResponse } from '../../models/GoogleBooksApiResponse.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  pageTitle: string = 'Book List';

  errorMessage: string;
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredBooks: Book[];
  books: Book[] = [];
  filteredGoogleBooks: GoogleBook[];
  gbooks: GoogleBook[] = [];
  gBooksApiResponse: GoogleBooksApiResponse;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooksFromGoogleApi().subscribe(
      igbooks => {
        this.gBooksApiResponse = GoogleBooksApiResponse.fromResponse(igbooks);
        this.gbooks = GoogleBook.fromGoogleBooksApiResponse(this.gBooksApiResponse);
        this.books = Book.fromGoogleBookArrayResponse(this.gbooks);
        this.filteredBooks = this.books;
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): Book[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: Book) =>
      book.bookTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onSaveClicked(newBook: Book): void {
    var tmp = this.filteredBooks.filter(x => x.id == newBook.id);
    var bookIndex =this.filteredBooks.indexOf(tmp[0]);
    this.filteredBooks[bookIndex].authorName = newBook.authorName;
    this.filteredBooks[bookIndex].publishedDate = newBook.publishedDate;
    this.filteredBooks[bookIndex].bookTitle = newBook.bookTitle;
  }

  onSaveNewBook(newBook: Book): void {
    var randomId = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";
    for (var i = 0; i < 13; i++)
      randomId += possible.charAt(Math.floor(Math.random() * possible.length));
    let addBook: Book = {
      id: randomId,
      authorName: newBook.authorName,
      publishedDate: newBook.publishedDate,
      bookTitle: newBook.bookTitle
    }
    this.books.push(addBook);
  }

  deleteBook(bookId: string): void {
    var tmp = this.filteredBooks.filter(x => x.id == bookId);
    this.books.splice(this.books.indexOf(tmp[0]), 1);
  }
}
