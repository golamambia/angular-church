import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsDetailsComponent } from './missions-details.component';

describe('MissionsDetailsComponent', () => {
  let component: MissionsDetailsComponent;
  let fixture: ComponentFixture<MissionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
