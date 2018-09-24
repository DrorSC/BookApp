import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditBook } from './modal-edit-book.component';

describe('ModalEditBook', () => {
  let component: ModalEditBook;
  let fixture: ComponentFixture<ModalEditBook>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditBook ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
