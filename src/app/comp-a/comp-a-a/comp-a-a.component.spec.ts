import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAAComponent } from './comp-a-a.component';

describe('CompAAComponent', () => {
  let component: CompAAComponent;
  let fixture: ComponentFixture<CompAAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompAAComponent]
    });
    fixture = TestBed.createComponent(CompAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
