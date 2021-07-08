import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonDetailsComponent } from './sermon-details.component';

describe('SermonDetailsComponent', () => {
  let component: SermonDetailsComponent;
  let fixture: ComponentFixture<SermonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
