import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../models/book';

@Component({
  selector: 'app-modal-new-book',
  templateUrl: './modal-new-book.component.html',
  styleUrls: ['./modal-new-book.component.css']
})
export class ModalNewBookComponent {
  newBook = new Book();
  isValid: boolean = true;
  model: Book;
  submitted = false;

  @Input() myBooks: Book[];

  onSubmit() { this.submitted = true; }

  @Output() onSaveClick: EventEmitter<Book> =
    new EventEmitter<Book>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-edit-book-title' }).result.then((result) => {
      var a = JSON.parse(JSON.stringify(this.newBook.publishedDate));
      this.newBook.publishedDate = a.year + "-" + a.month + "-" + a.day;
      this.onSaveClick.emit(this.newBook);
    }, (reason) => {
      //console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  focusOutFunc() {
    console.log("focus out");
    if (this.newBook.bookTitle == "" || this.newBook.bookTitle == null) {
      this.isValid = true;
      return;
    }
    for (let book of this.myBooks) {
      if (book.bookTitle.toLocaleLowerCase() == this.newBook.bookTitle.toLocaleLowerCase()) {
        this.isValid = false;
        return;
      }
    }
    this.isValid = true;
  }
  focusFunc(){
    this.isValid = true;
  }
}
