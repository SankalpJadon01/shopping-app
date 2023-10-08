import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbycategoryComponent } from './listbycategory.component';

describe('ListbycategoryComponent', () => {
  let component: ListbycategoryComponent;
  let fixture: ComponentFixture<ListbycategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListbycategoryComponent]
    });
    fixture = TestBed.createComponent(ListbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
