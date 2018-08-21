import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDownComponent } from './mouse-down.component';

describe('MouseDownComponent', () => {
  let component: MouseDownComponent;
  let fixture: ComponentFixture<MouseDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
