import { Component, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../models/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-new-book',
  templateUrl: './modal-new-book.component.html',
  styleUrls: ['./modal-new-book.component.css']
})
export class ModalNewBookComponent {
  newBook = new Book();
  
  model: Book;
  submitted = false;

  onSubmit() {this.submitted=true;}

  @Output() onSaveClick: EventEmitter<Book> =
    new EventEmitter<Book>();

  constructor(private modalService: NgbModal, private parserFormatter: NgbDateParserFormatter) {}

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

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
