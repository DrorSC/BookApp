import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-book',
  templateUrl: './modal-delete-book.component.html',
  styleUrls: ['./modal-delete-book.component.css']
})
export class ModalDeleteBookComponent implements OnInit {
  @Input() myBook: Book;

  submitted = false;

  onSubmit() { this.submitted = true; }

  @Output() deleteClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-delete-book-title' }).result.then((result) => {
      this.deleteClicked.emit(this.myBook.id);
    }, (reason) => {
      //console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }
}
