import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBox } from './name-box';

describe('NameBox', () => {
  let component: NameBox;
  let fixture: ComponentFixture<NameBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
