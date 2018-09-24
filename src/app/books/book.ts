import { GoogleBooksApiResponse } from "../models/GoogleBooksApiResponse.model";

export interface IBook {
    Id: string;
    AuthorName: string;
    PublishedDate: string;
    BookTitle: string;
}

export class Book {
    id: string;
    authorName: string;
    publishedDate: string;
    bookTitle: string;

    public static fromResponse(response: IBook): Book {
        let book: Book = {
            id: response.Id,
            authorName: response.AuthorName,
            bookTitle: response.BookTitle,
            publishedDate: response.PublishedDate
        }
        return book;
    }

    public static fromArrayResponse(response: IBook[]): Book[] {
        let books = [];
        for (let iBook of response) {
            books.push(Book.fromResponse(iBook));
        }
        return books;
    }

    static fromGoogleBookArrayResponse(gbooks: GoogleBook[]): Book[] {
        var tmp = JSON.parse(JSON.stringify(gbooks));
        let books = [];
        for(let gbookitem of tmp){
            books.push(Book.fromGoogleBookResponse(gbookitem));
        }
        return books;
      }

      static fromGoogleBookResponse(gbookitem: GoogleBook): Book{
        var tmp = JSON.parse(JSON.stringify(gbookitem));
        var tmp2 = JSON.parse(JSON.stringify(tmp.volumeInfo));
        let book: Book = {
            id: tmp.id,
            authorName: tmp2.authors[0],
            bookTitle: tmp2.title,
            publishedDate: tmp2.publishedDate
        }
        return book;
      }
    
}

export interface IGoogleBook {
    Kind: string;
    Items: string[];
    TotalItems: number;
}

export class GoogleBook {
    kind: string;
    items: string[];
    totalItems: number;
    
    static fromGoogleBooksApiResponse(gBooksApiResponse: GoogleBooksApiResponse): GoogleBook[] {
        let gBooks=[];
        for(let gBook of gBooksApiResponse.items){
            gBooks.push(gBook);
        }
        return gBooks;
    }


    public static fromResponse(response: IGoogleBook): GoogleBook {
        let gBook: GoogleBook = {
            kind: response.Kind,
            items: response.Items,
            totalItems: response.TotalItems
        }
        return gBook;
    }

    public static fromArrayResponse(response: IGoogleBook[]): GoogleBook[] {
        let gBooks = [];
        for (let iGBook of response) {
            gBooks.push(GoogleBook.fromResponse(iGBook));
        }
        return gBooks;
    }
}
