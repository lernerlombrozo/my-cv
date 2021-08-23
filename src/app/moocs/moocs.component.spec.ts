import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoocsComponent } from './moocs.component';

describe('MoocsComponent', () => {
  let component: MoocsComponent;
  let fixture: ComponentFixture<MoocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
