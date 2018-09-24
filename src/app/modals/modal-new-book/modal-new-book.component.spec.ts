import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewBookComponent } from './modal-new-book.component';

describe('ModalNewBookComponent', () => {
  let component: ModalNewBookComponent;
  let fixture: ComponentFixture<ModalNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
