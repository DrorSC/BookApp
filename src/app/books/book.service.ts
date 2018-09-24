import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { IBook, IGoogleBook } from '../models/book';
import { Observable, throwError } from 'rxjs';
import { IGoogleBooksApiResponse } from '../models/GoogleBooksApiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl = 'src/api/books/books.json';
  private baseApi = "https://www.googleapis.com/books/v1/volumes?q=";

  private search: string = "agatha";

  constructor(private http: HttpClient) {}

  getBooksFromGoogleApi(): Observable<IGoogleBooksApiResponse> {
    return this.http.get<IGoogleBooksApiResponse>(this.baseApi + this.search).pipe(
      // tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    // return this.http.get<IGoogleBook[]>(this.baseApi + "harry").pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
