import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResPasswordPage } from './res-password.page';

describe('ResPasswordPage', () => {
  let component: ResPasswordPage;
  let fixture: ComponentFixture<ResPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
