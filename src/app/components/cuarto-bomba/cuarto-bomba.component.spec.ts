import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoBombaComponent } from './cuarto-bomba.component';

describe('CuartoBombaComponent', () => {
  let component: CuartoBombaComponent;
  let fixture: ComponentFixture<CuartoBombaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartoBombaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoBombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
