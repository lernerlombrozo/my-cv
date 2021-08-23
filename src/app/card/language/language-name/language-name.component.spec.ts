import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageNameComponent } from './language-name.component';

describe('LanguageNameComponent', () => {
  let component: LanguageNameComponent;
  let fixture: ComponentFixture<LanguageNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
