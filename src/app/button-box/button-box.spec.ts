import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBox } from './button-box';

describe('ButtonBox', () => {
  let component: ButtonBox;
  let fixture: ComponentFixture<ButtonBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
