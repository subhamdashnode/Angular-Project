import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosearchComponent } from './autosearch.component';

describe('AutosearchComponent', () => {
  let component: AutosearchComponent;
  let fixture: ComponentFixture<AutosearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
