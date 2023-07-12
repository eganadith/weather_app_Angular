import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIconComponent } from './text-icon.component';

describe('TextIconComponent', () => {
  let component: TextIconComponent;
  let fixture: ComponentFixture<TextIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextIconComponent]
    });
    fixture = TestBed.createComponent(TextIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
