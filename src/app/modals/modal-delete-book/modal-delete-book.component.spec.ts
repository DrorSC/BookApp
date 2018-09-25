import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteBookComponent } from './modal-delete-book.component';

describe('ModalDeleteBookComponent', () => {
  let component: ModalDeleteBookComponent;
  let fixture: ComponentFixture<ModalDeleteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
