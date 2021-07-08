import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeContentComponent } from './become-content.component';

describe('BecomeContentComponent', () => {
  let component: BecomeContentComponent;
  let fixture: ComponentFixture<BecomeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
