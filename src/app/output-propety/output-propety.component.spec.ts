import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropetyComponent } from './output-propety.component';

describe('OutputPropetyComponent', () => {
  let component: OutputPropetyComponent;
  let fixture: ComponentFixture<OutputPropetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPropetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputPropetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
