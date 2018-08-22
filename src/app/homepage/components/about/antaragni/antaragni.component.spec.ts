import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntaragniComponent } from './antaragni.component';

describe('AntaragniComponent', () => {
  let component: AntaragniComponent;
  let fixture: ComponentFixture<AntaragniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntaragniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntaragniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
