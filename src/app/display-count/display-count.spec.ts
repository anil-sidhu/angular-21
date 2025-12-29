import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCount } from './display-count';

describe('DisplayCount', () => {
  let component: DisplayCount;
  let fixture: ComponentFixture<DisplayCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
