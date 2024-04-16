import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropetyComponent } from './input-propety.component';

describe('InputPropetyComponent', () => {
  let component: InputPropetyComponent;
  let fixture: ComponentFixture<InputPropetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPropetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
