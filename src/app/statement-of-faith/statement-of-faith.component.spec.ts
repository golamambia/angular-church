import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementOfFaithComponent } from './statement-of-faith.component';

describe('StatementOfFaithComponent', () => {
  let component: StatementOfFaithComponent;
  let fixture: ComponentFixture<StatementOfFaithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementOfFaithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementOfFaithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
