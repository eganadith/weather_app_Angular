import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNameInputComponent } from './city-name-input.component';

describe('CityNameInputComponent', () => {
  let component: CityNameInputComponent;
  let fixture: ComponentFixture<CityNameInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityNameInputComponent]
    });
    fixture = TestBed.createComponent(CityNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
