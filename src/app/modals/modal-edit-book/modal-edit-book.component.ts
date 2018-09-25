import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../models/book';

@Component({
  selector: 'app-modal-edit-book',
  templateUrl: './modal-edit-book.component.html',
  styleUrls: ['./modal-edit-book.component.css']
})
export class ModalEditBook implements OnInit {
  @Input() myBook: Book;
  bookToEdit: Book;

  @Input() myBooks: Book[];
  isValid: boolean;

  submitted = false;

  onSubmit() { this.submitted = true; }

  @Output() saveClicked: EventEmitter<Book> =
    new EventEmitter<Book>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.bookToEdit = new Book();
    this.bookToEdit.id = this.myBook.id;
    this.bookToEdit.authorName = this.myBook.authorName;
    this.bookToEdit.publishedDate = this.myBook.publishedDate;
    this.bookToEdit.bookTitle = this.myBook.bookTitle;
  }

  open(content) {
    this.bookToEdit.publishedDate = this.myBook.publishedDate;
    this.modalService.open(content, { ariaLabelledBy: 'modal-edit-book-title' }).result.then((result) => {

      var a = JSON.parse(JSON.stringify(this.bookToEdit.publishedDate));
      this.bookToEdit.publishedDate = a.year + "-" + a.month + "-" + a.day;
      this.saveClicked.emit(this.bookToEdit);
    }, (reason) => {
      //console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    //console.log("getdismisreason " + reason);
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  focusOutFunc() {
    console.log("focus out");
    if (this.bookToEdit.bookTitle == "" || this.bookToEdit.bookTitle == null) {
      this.isValid = true;
      return;
    }
    for (let book of this.myBooks) {
      if (book.bookTitle.toLocaleLowerCase() == this.bookToEdit.bookTitle.toLocaleLowerCase()) {
        this.isValid = false;
        return;
      }
    }
    this.isValid = true;
  }
  focusFunc() {
    this.isValid = true;
  }
}
