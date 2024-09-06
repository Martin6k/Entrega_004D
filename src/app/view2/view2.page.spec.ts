import { ComponentFixture, TestBed } from '@angular/core/testing';
import { View2Page } from './view2.page';

describe('View2Page', () => {
  let component: View2Page;
  let fixture: ComponentFixture<View2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(View2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
