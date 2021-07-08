import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLiveComponent } from './service-live.component';

describe('ServiceLiveComponent', () => {
  let component: ServiceLiveComponent;
  let fixture: ComponentFixture<ServiceLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
