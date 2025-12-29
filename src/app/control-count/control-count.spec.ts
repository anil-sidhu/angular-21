import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCount } from './control-count';

describe('ControlCount', () => {
  let component: ControlCount;
  let fixture: ComponentFixture<ControlCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
