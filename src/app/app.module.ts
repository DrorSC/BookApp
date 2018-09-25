import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { OnlyEnglishLettersPipe } from './books/only-english-letters.pipe';
// import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { ModalEditBook } from './modals/modal-edit-book/modal-edit-book.component';
import { ModalNewBookComponent } from './modals/modal-new-book/modal-new-book.component';
import { BookService } from './books/book.service';
import { ModalDeleteBookComponent } from './modals/modal-delete-book/modal-delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    OnlyEnglishLettersPipe,
    ModalEditBook,
    ModalNewBookComponent,
    ModalDeleteBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  entryComponents: [ ModalNewBookComponent ]
})
export class AppModule { }
