import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullColorPagePage } from './full-color-page.page';

describe('FullColorPagePage', () => {
  let component: FullColorPagePage;
  let fixture: ComponentFixture<FullColorPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FullColorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
